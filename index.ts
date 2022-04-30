// import express, { Application, Request, Response, NextFunction } from 'express';
import express from 'express';
// const express = require('express');
// declare module '*';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Server ok!');
})

app.listen(port, () => {
    console.log(`Server Running ok on port: ${port}`);
    
})