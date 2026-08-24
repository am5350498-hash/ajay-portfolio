const express=require('express');
const router=express.Router();
var mysql=require('mysql2');
var util=require('util');

var conn=mysql.createConnection({
    host:'bxpsavyagjw60qgiboys-mysql.services.clever-cloud.com',
    user:'uymdxyeububzgbo4',
    password:'GdDzVXygTiaxfOsQeJy8',
    database:'bxpsavyagjw60qgiboys'
})

var exe=util.promisify(conn.query).bind(conn);
router.use(express.urlencoded({extended:true}));

router.get('/',async(req,res)=>{
    var sql='select * from hero';
    var hero=await exe(sql);
    res.render('website/home.ejs',{hero:hero[0]});
})

router.get('/about',async(req,res)=>{
    var select = `select * from about`
    var about = await exe(select)
    res.render('website/about.ejs',{about:about[0]})
})

// router.get('/resume',async(req,res)=>{
//     var sql='select * from technical_skills';
//     var skill=await exe(sql);
//     var sql1='select * from experience';
//     var experience=await exe(sql1);
//      var sql2='select * from experience';
//     var education=await exe(sql);
//     // res.send(skill);
//     res.render('website/resume.ejs',{skill:skill,education:education});
// })
router.get('/resume', async (req, res) => {
    var skill = await exe("SELECT * FROM technical_skills");
    var experience = await exe("SELECT * FROM experience");
    var education = await exe("SELECT * FROM education");
    res.render("website/resume.ejs", {skill: skill,experience: experience,education: education});

});

router.get("/services", async (req, res) => {
    var services = await exe("SELECT * FROM services");
    res.render("website/services", {services: services});

});

router.get('/portfolio', async (req, res) => {

    var sql = "SELECT * FROM porfolio";
    var data = await exe(sql);

    res.render("website/portfolio", {
        portfolio: data});

});

router.get('/contact',async(req,res)=>{
    var sql='select * from contact';
    var contact=await exe(sql);
    res.render('website/contact.ejs',{contact:contact[0]});
})
router.post('/save_contact',async(req,res)=>{
    // res.send(req.body);
    var {name,email,subject,message}=req.body;
    var status='pending';
    var timestamp=Date.now();
    let date=new Date(timestamp)
    .toISOString()
    .slice(0, 19)
    .replace('T',' ');
    var sql='insert into contact_save(cname,cemail,csubject,cmessage,cstatus,cdate)values(?,?,?,?,?,?)';
    var data=await exe(sql,[name,email,subject,message,status,date]);
    res.redirect('/contact');
})

router.get('/testimonials', async (req, res) => {
    var testimonial = await exe("SELECT * FROM testimonial");
    res.render("website/testimonials.ejs", {
        testimonial: testimonial
    });

});

router.get('/blog',async(req,res)=>{
    
    var select = `select * from blog`
    var blog = await exe(select)
    res.render('website/blog.ejs',{blog:blog})
})


module.exports=router;
