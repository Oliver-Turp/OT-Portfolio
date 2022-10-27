The code that sets how long the jwt lasts is located in [adminAuthController.js](./backend/controllers/adminAuthController.js#generateToken)  inside it's `generateToken` method. The line that says 
```js
// { expiresIn: "2d" }   => expires in 2days (30d => 30days)
return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2d" } );
```