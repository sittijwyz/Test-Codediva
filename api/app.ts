import express, { Express, Request, Response, RequestHandler } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mysql from 'mysql2'
import bcrypt from 'bcrypt'
import jwt, { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';

const secret: string = "Fullstack-login"
const saltRound: number = 10;
import { resolve } from 'path'
import { rejects } from 'assert'

const jsonParser:RequestHandler = bodyParser.json()
const app: Express = express()
const port: number = 3333

app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "register-login-swensen"
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting!", err);
    return;
  }
  console.log("Connected Mysql successfully");
});

app.post('/register',jsonParser,async (req: Request, res: Response) => {
  bcrypt.hash(req.body.password,saltRound, async (err,hash)=>{
    if (err) {
      return res.status(500).send(err);
    }
    try{
      const results = await new Promise((resolve,reject)=>{
        db.query("INSERT INTO customers (FName, LName, Mobile, Email, Password, Gender, Birthday) VALUES(?,?,?,?,?,?,?)",
        [req.body.fname,req.body.lname,req.body.mobile,req.body.email,hash,req.body.gender,req.body.birthday],
        (err,result)=>{
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        })
      })
      return res.status(200).json(results);
    }catch(err){
      return res.status(500).send(err);
    }
  })
})

app.post('/login',jsonParser,async (req: Request, res: Response) => {
    try{
      const customers: any[] = await new Promise<any>((resolve,reject)=>{
        db.query("SELECT * FROM customers WHERE email= ?",
        [req.body.email],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        })
    })
    if (customers.length === 0) {
      // ไม่พบลูกค้าที่ตรงกับอีเมล
      res.json({ success: false, message: "No customer found" });
      return;
    }
    console.log(customers[0].email);
    bcrypt.compare(req.body.password,customers[0].password,(err,isLogin:boolean)=>{
      if (isLogin) {
        const token = jwt.sign({ email: customers[0].email}, secret, { expiresIn: '1h' });
        const customer:string[] = customers[0];
        res.json({ success: true, customer,token });
      } else {
        res.json({ success: false, message: "Invalid password" });
      }
    })
    } catch(err){
      return res.status(500).send(err);
    }
  })

  app.post('/authen', jsonParser, async (req: Request, res: Response) => {
    try {
      const token : string | undefined = req.headers.authorization?.split(' ')[1];
      if (token === undefined) {
        return res.status(401).json({ message: 'Token not provided' });
      }
      const decoded:any = jwt.verify(token, secret);
      // ตรวจสอบว่า Token หมดอายุหรือไม่
      if (decoded.exp * 1000 < Date.now()) {
        return res.status(401).json({ message: 'Token has expired' });
      }
      res.json({ success:true,decoded });
    } catch (err) {
      if (err) {
        // ข้อผิดพลาดเกี่ยวกับ JWT (ไม่ถูกต้องหรือหมดอายุ)
        return res.status(401).json({ message: 'Invalid token' });
      } else {
        // ข้อผิดพลาดอื่น ๆ
        return res.status(500).json({ message: 'Internal server error' });
      }
    }
  });
  
app.listen(port, () => console.log(`Application is running on port ${port}`))
