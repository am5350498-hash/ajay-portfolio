const express = require("express");
var mysql=require('mysql2');
var session=require('express-session');
var fileupload=require('express-fileupload');
var fs = require("fs");
var path=require('path');
const router = express.Router();
var util=require('util');

var conn=mysql.createConnection({
    host:'bxpsavyagjw60qgiboys-mysql.services.clever-cloud.com',
    user:'uymdxyeububzgbo4',
    password:'uymdxyeububzgbo4',
    database:'bxpsavyagjw60qgiboys'
})
router.use(session({
    secret:'ajaymore',
    resave:false,
    saveUninitialized:true
}))
var exe=util.promisify(conn.query).bind(conn);
router.use(express.urlencoded({extended:true}));
router.use(fileupload());
function session_check(req,res,next){
    if(req.session.lid){
        next();
    }else{
        res.redirect('/admin/login');
    }
}

router.get('/dashboard',session_check,(req, res) => {
    //   res.send(req.session);
    var username=req.session.username
    res.render('admin/dashboard.ejs',{username:username});
});

router.get('/login',(req,res)=>{
    res.render('admin/login.ejs')
})
router.post('/login_check',async(req,res)=>{
    // res.send(req.body);
    var {username,password}=req.body;
    var sql=`select * from login where username=? and password=?`;
    var data=await exe(sql,[username,password]);
    if(data[0]){
        // res.send(data);
        req.session.lid=data[0].lid;
        req.session.username=data[0].username;
        res.redirect('/admin/dashboard')
    }else{
        res.redirect('/admin/login');
    }
})

router.get('/forgot',(req,res)=>{
    res.render('admin/forgot.ejs')
})

router.get('/logout',(req,res)=>{
    // res.render('admin/forgot.ejs')
    req.session.destroy();
    res.redirect('/admin/login');
})
//=======================================================================================================================================================
router.get('/skill_add',(req,res)=>{
    res.render('admin/skill_add.ejs')
})

router.post('/skill_add_save',async(req,res)=>{
    // res.send(req.body);
    var {tech_name,tech_per}=req.body;
    var sql=`insert into technical_skills(tech_name,tech_per)values(?,?)`;
    var data=await exe(sql,[tech_name,tech_per]);
    res.redirect('/admin/skill_add');
})

router.get('/skill_list',async(req,res)=>{
    var sql=`select * from technical_skills`;
    var data=await exe(sql);
    // res.send(data)
    res.render('admin/skill_list.ejs',{skill:data});
})
router.get('/skill_edit/:id', async (req, res) => {

    var id = req.params.id;

    var data = await exe(
        "SELECT * FROM technical_skills WHERE ts_id=?",
        [id]
    );

    res.render("admin/skill_edit", {
        skill: data[0]
    });

});

router.post('/skill_update', async (req, res) => {
    var { id, tech_name, tech_per } = req.body;
    var sql = ` UPDATE technical_skills SET tech_name=?, tech_per=? WHERE ts_id=? `;
    await exe(sql, [tech_name, tech_per, id]);
    res.redirect('/admin/skill_list');
});
router.get('/skill_delete/:id', async (req, res) => {
    var id = req.params.id;
    await exe( "DELETE FROM technical_skills WHERE ts_id=?", [id]);
    res.redirect('/admin/skill_list');
});
//=======================================================================================================================================================
router.get('/experience_add',(req,res)=>{
    res.render('admin/experience_add.ejs')
})

router.post('/experience_add_save',async(req,res)=>{
    // res.send(req.body);
    var {exp_duration,exp_position,exp_company,exp_desc}=req.body;
    var sql=`insert into experience(exp_duration,exp_position,exp_company,exp_desc)values(?,?,?,?)`;
    var data=await exe(sql,[exp_duration,exp_position,exp_company,exp_desc]);
    res.redirect('/admin/experience_add');
})

router.get('/experience_list',async(req,res)=>{
    var sql=`select * from experience`;
    var data=await exe(sql);
    // res.send(data)
    res.render('admin/experience_list.ejs',{experience:data});
})

router.get('/experience_edit/:id', async (req, res) => {

    var id = req.params.id;

    var data = await exe(
        "SELECT * FROM experience WHERE eid=?",
        [id]
    );

    res.render("admin/experience_edit", {
        experience: data[0]
    });

});

router.post('/experience_update', async (req, res) => {

    var {
        id,
        exp_duration,
        exp_position,
        exp_company,
        exp_desc
    } = req.body;

    await exe(
        "UPDATE experience SET exp_duration=?, exp_position=?, exp_company=?, exp_desc=? WHERE eid=?",
        [
            exp_duration,
            exp_position,
            exp_company,
            exp_desc,
            id   
        ]
    );

    res.redirect('/admin/experience_list');

});

router.get('/experience_delete/:id', async (req, res) => {

    var id = req.params.id;

    await exe(
        "DELETE FROM experience WHERE eid=?",
        [id]
    );

    res.redirect('/admin/experience_list');

});
//=======================================================================================================================================================
router.get('/education_add',(req,res)=>{
    res.render('admin/education_add.ejs')
})

router.post('/education_add_save',async(req,res)=>{
    // res.send(req.body);
    var {edu_duration,edu_degree,edu_university}=req.body;
    var sql=`insert into education(edu_duration,edu_degree,edu_university)values(?,?,?)`;
    var data=await exe(sql,[edu_duration,edu_degree,edu_university]);
    res.redirect('/admin/education_add');
})

router.get('/education_list',async(req,res)=>{
    var sql=`select * from education`;
    var data=await exe(sql);
    // res.send(data)
    res.render('admin/education_list.ejs',{education:data});
})

router.get('/education_edit/:id', async (req, res) => {

    var id = req.params.id;

    var data = await exe(
        "SELECT * FROM education WHERE eid=?",
        [id]
    );

    res.render("admin/education_edit", {
        education: data[0]
    });

});

router.post('/education_update', async (req, res) => {

    var {
        id,
        edu_duration,
        edu_degree,
        edu_university
    } = req.body;

    await exe(
        "UPDATE education SET edu_duration=?, edu_degree=?, edu_university=? WHERE eid=?",
        [
            edu_duration,
            edu_degree,
            edu_university,
            id
        ]
    );

    res.redirect('/admin/education_list');

});

router.get('/education_delete/:id', async (req, res) => {

    var id = req.params.id;

    await exe(
        "DELETE FROM education WHERE eid=?",
        [id]
    );

    res.redirect('/admin/education_list');

});
//=======================================================================================================================================================
router.get('/service_add',(req,res)=>{
    res.render('admin/service_add.ejs');
});

router.post('/service_add_save',async(req,res)=>{
    var {service_icon,service_title,service_description}=req.body;
    var sql=`insert into services(service_icon,service_title,service_description)values(?,?,?)`;
    await exe(sql,[service_icon,service_title,service_description]);
    res.redirect('/admin/service_add');
});

router.get('/service_list',async(req,res)=>{
    var sql=`select * from services`;
    var data=await exe(sql);
    res.render('admin/service_list.ejs',{services:data});
});
router.get('/service_edit/:id', async (req, res) => {

    var id = req.params.id;

    var sql = "SELECT * FROM services WHERE id=?";

    var data = await exe(sql, [id]);

    res.render("admin/service_edit", {
        service: data[0]
    });

});
router.post('/service_update', async (req, res) => {

    var {
        id,
        service_icon,
        service_title,
        service_description
    } = req.body;

    var sql = `
        UPDATE services
        SET service_icon=?,
            service_title=?,
            service_description=?
        WHERE id=?
    `;

    await exe(sql, [
        service_icon,
        service_title,
        service_description,
        id
    ]);

    res.redirect('/admin/service_list');

});
router.get('/service_delete/:id', async (req, res) => {

    var id = req.params.id;

    await exe(
        "DELETE FROM services WHERE id=?",
        [id]
    );

    res.redirect('/admin/service_list');

});
//=======================================================================================================================================================
router.get('/portfolio_add',(req,res)=>{
    res.render('admin/portfolio_add.ejs');
});

router.post('/portfolio_add_save', async (req, res) => {
    var { project_name, title } = req.body;
    var imgname = "";
    if (req.files && req.files.image) {
        var img = req.files.image;
        imgname = Date.now() + "_" + img.name;
        var uploadPath = path.join(__dirname, "../public/uploads", imgname);
        await img.mv(uploadPath);
    }
    var sql = `INSERT INTO porfolio(project_name, title, image) VALUES (?,?,?)`;
await exe(sql, [project_name, title, imgname]);
    res.redirect("/admin/portfolio_add");

});
router.get('/portfolio_list',async(req,res)=>{
    var sql=`select * from porfolio`;
    var data=await exe(sql);
    res.render('admin/portfolio_list.ejs',{portfolio:data});
});
router.get('/portfolio_edit/:id', async (req, res) => {
    var id = req.params.id;
    var sql = "SELECT * FROM porfolio WHERE id=?";
    var data = await exe(sql, [id]);
    res.render("admin/portfolio_edit.ejs", {
        portfolio: data[0]
    });

});

router.get('/portfolio_delete/:id', async (req, res) => {
    var id = req.params.id;
    var data = await exe("SELECT * FROM porfolio WHERE id=?", [id]);
    if (data.length > 0) {
        if (data[0].image) {
            var imgPath = path.join(__dirname, "../public/uploads", data[0].image);
            if (fs.existsSync(imgPath)) {
                fs.unlinkSync(imgPath);
            }
        }
        await exe("DELETE FROM porfolio WHERE id=?", [id]);
    }
    res.redirect("/admin/portfolio_list");
});

router.post('/portfolio_update', async (req, res) => {
    var { id, project_name, title, old_photo } = req.body;
    var imgname = old_photo;
    if (req.files && req.files.photo) {
        var img = req.files.photo;
        imgname = Date.now() + "_" + img.name;
        var newPath = path.join(__dirname, "../public/uploads", imgname);
        await img.mv(newPath);
        if (old_photo) {
            var oldPath = path.join(__dirname, "../public/uploads", old_photo);

            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }
    }
    await exe("UPDATE porfolio SET project_name=?, title=?, image=? WHERE id=?",
        [project_name, title, imgname, id]
    );
    res.redirect("/admin/portfolio_list");
});
//=======================================================================================================================================================
router.get('/testimonial_add',(req,res)=>{
    res.render('admin/testimonial_add');
});

router.post('/testimonial_add_save',async(req,res)=>{

    var {client_name,client_position,testimonial_description}=req.body;

    var imgname="";

    if(req.files && req.files.photo){

        var img=req.files.photo;

        imgname=Date.now()+"_"+img.name;

        var uploadPath=path.join(__dirname,"../public/uploads",imgname);

        await img.mv(uploadPath);

    }

    await exe(
        "INSERT INTO testimonial(client_name,client_position,testimonial_description,image) VALUES(?,?,?,?)",
        [client_name,client_position,testimonial_description,imgname]
    );

    res.redirect("/admin/testimonial_add");

});


router.get('/testimonial_list',async(req,res)=>{

    var testimonial=await exe("SELECT * FROM testimonial");

    res.render("admin/testimonial_list",{
        testimonial
    });

});


router.get('/testimonial_edit/:id',async(req,res)=>{

    var id=req.params.id;

    var data=await exe(
        "SELECT * FROM testimonial WHERE tid=?",
        [id]
    );

    res.render("admin/testimonial_edit",{
        testimonial:data[0]
    });

});


router.post('/testimonial_update',async(req,res)=>{

    var {
        id,
        client_name,
        client_position,
        testimonial_description,
        old_photo
    }=req.body;

    var imgname=old_photo;

    if(req.files && req.files.photo){

        var img=req.files.photo;

        imgname=Date.now()+"_"+img.name;

        var uploadPath=path.join(__dirname,"../public/uploads",imgname);

        await img.mv(uploadPath);

        if(old_photo){

            var oldPath=path.join(__dirname,"../public/uploads",old_photo);

            if(fs.existsSync(oldPath)){
                fs.unlinkSync(oldPath);
            }

        }

    }

    await exe(
        "UPDATE testimonial SET client_name=?,client_position=?,testimonial_description=?,image=? WHERE tid=?",
        [client_name,client_position,testimonial_description,imgname,id]
    );

    res.redirect("/admin/testimonial_list");

});


router.get('/testimonial_delete/:id',async(req,res)=>{

    var id=req.params.id;

    var data=await exe(
        "SELECT * FROM testimonial WHERE tid=?",
        [id]
    );

    if(data.length>0){

        if(data[0].image){

            var imgPath=path.join(__dirname,"../public/uploads",data[0].image);

            if(fs.existsSync(imgPath)){
                fs.unlinkSync(imgPath);
            }

        }

        await exe(
            "DELETE FROM testimonial WHERE tid=?",
            [id]
        );

    }

    res.redirect("/admin/testimonial_list");

     });
//=======================================================================================================================================================
router.get('/setting',async(req,res)=>{
    var sql=`select * from contact`;
    var data=await exe(sql);
    var sql1=`select * from social`;
    var data1=await exe(sql1);
    res.render('admin/settings.ejs',{data:data[0],data1:data1[0]});
})

router.post('/contact_save',async(req,res)=>{
    // res.send(req.body);
    // res.send(req.files);
    var {email,phone,address,map,old_logo}=req.body;
    if(req.files){
        var img=req.files.logo;
        var imgname=Date.now()+img.name;
        var imgpath=path.join(__dirname,'../','public',imgname);
        img.mv(imgpath,(err)=>{});
        // res.send(imgpath);
    }else{
        var imgname=old_logo;
    }
    var sql='update contact set email=?,phone=?,address=?,map=?,logo=? where cid=1';
    var data=await exe(sql,[email,phone,address,map,imgname]);
    // res.send('Done');
    res.redirect('/admin/setting');
});

router.post('/social_save',async(req,res)=>{
    // res.send(req.body);
    var {facebook,twitter,instagram,linkedin,github,youtube}=req.body;
    var sql='update social set facebook=?,twitter=?,instagram=?,linkedin=?,github=?,youtube=? where sid=1'; 
    var data=await exe(sql,[facebook,twitter,instagram,linkedin,github,youtube]);
    res.redirect('/admin/setting');
})

//=======================================================================================================================================================
router.get('/hero_edit', async (req, res) => {

    var sql = "select * from hero";
    var hero = await exe(sql);

    res.render("admin/hero_edit.ejs", {
        hero: hero[0]
    });

});


router.post('/hero_save', async (req, res) => {
    var { name, Position, experience_disc, old_photo } = req.body;
    var imgname = old_photo;
    if (req.files && req.files.photo) {
        var img = req.files.photo;
        imgname = Date.now() + img.name;
        if (old_photo) {
            var oldPath = path.join(__dirname, "../public/uploads", old_photo);
            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }
        var newPath = path.join(__dirname, "../public/uploads", imgname);
        await img.mv(newPath);
    }
    var sql = "UPDATE hero SET name=?, Position=?, experience_disc=?, Photo=? WHERE id=1";
    await exe(sql, [name, Position, experience_disc, imgname]);
    res.redirect("/admin/hero_edit");
});


//====================================================================================================================================

router.get("/about_edit", async (req, res) => {
    let about = await exe("SELECT * FROM about");

    res.render("admin/about_edit", {
        about: about[0]
    });
});


router.post('/about_save', async (req, res) => {
    var { name,position, expirience_dicription,how_year_expirence,your_expirence,email,location,freelance,Project_complete,happy_client,Awards_won,year_of_expirence, old_photo } = req.body;
    var imgname = old_photo;
    if (req.files && req.files.photo) {
        var img = req.files.photo;
        imgname = Date.now() + img.name;
        if (old_photo) {
            var oldPath = path.join(__dirname, "../public/uploads", old_photo);
            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }
        var newPath = path.join(__dirname, "../public/uploads", imgname);
        await img.mv(newPath);
    }
    var sql = "UPDATE about SET name=?, position=?, expirience_dicription=?,how_year_expirence=?,your_expirence=?,email=?,location=?,freelance=?,Project_complete=?,happy_client=?,Awards_won=?,year_of_expirence=?, Image=? WHERE id=1";
    await exe(sql, [ name,position, expirience_dicription,how_year_expirence,your_expirence,email,location,freelance,Project_complete,happy_client,Awards_won,year_of_expirence, imgname]);
    res.redirect("/admin/about_edit");
});

//=====================================================================================================================================================================================================================================================



router.get('/blog_add',(req,res)=>{
    res.render('admin/blog_add.ejs');
});

router.post('/blog_add_save', async (req, res) => {
    var { post_name, post_date, post_discription,post_readmore } = req.body;
    var imgname = "";
    if (req.files && req.files.photo) {
        var img = req.files.photo;
        imgname = Date.now() + "_" + img.name;
        var uploadPath = path.join(__dirname, "../public/uploads", imgname);
        await img.mv(uploadPath);
    }
    var sql = `INSERT INTO blog(post_name, post_date, post_discription,post_readmore, Image)VALUES (?,?,?,?,?)`;
    await exe(sql, [post_name,post_date,post_discription,post_readmore,imgname]);
    res.redirect("/admin/blog_list");

});

router.get('/blog_list',async(req,res)=>{
    var sql=`select * from blog`;
    var data=await exe(sql);
    res.render('admin/blog_list.ejs',{blog:data});
});

router.get('/blog_edit/:id', async (req, res) => {
    var id = req.params.id;
    var sql = "SELECT * FROM blog WHERE id=?";
    var data = await exe(sql, [id]);
    res.render("admin/blog_edit.ejs", {
        blog: data[0]
    });

});

router.get('/blog_delete/:id', async (req, res) => {
    var id = req.params.id;
    var data = await exe("SELECT * FROM blog WHERE id=?", [id]);
    if (data.length > 0) {

        var imgPath = path.join(__dirname, "../public/uploads", data[0].Image);
        if (fs.existsSync(imgPath)) {
            fs.unlinkSync(imgPath);
        }
        await exe("DELETE FROM blog WHERE id=?", [id]);
    }
    res.redirect("/admin/blog_list");
});

router.post('/blog_update', async (req, res) => {
    var { id, post_name, post_date, post_discription,post_readmore, old_photo } = req.body;
    var imgname = old_photo;
    if (req.files && req.files.photo) {
        var img = req.files.photo;
        imgname = Date.now() + "_" + img.name;
        var newPath = path.join(__dirname, "../public/uploads", imgname);
        await img.mv(newPath);
        if (old_photo) {
            var oldPath = path.join(__dirname, "../public/uploads", old_photo);

            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }
    }
    await exe("UPDATE blog SET post_name=?, post_date=?, post_discription=?,post_readmore=?, Image=? WHERE id=?",
        [post_name, post_date, post_discription,post_readmore, imgname, id]
    );
    res.redirect("/admin/blog_list");
});

//=========================================================================================================================================================================

// router.get('/pending_enq',async(req,res)=>{
//     var sql='select * from contact_save where cstatus="pedding"';
//     var data=await exe(sql);
//     res.render('admin/pending_enq.ejs',{data:data});
// });

// ================= Pending =================

router.get('/pending_enq', async (req, res) => {
    var data = await exe("SELECT * FROM contact_save WHERE cstatus='pending'");
    res.render('admin/pending_enq.ejs', { data });
});

// Pending -> Confirm
router.get('/pending_confirm/:id', async (req, res) => {
    var id = req.params.id;

    await exe(
        "UPDATE contact_save SET cstatus='confirm' WHERE cid=?",
        [id]
    );

    res.redirect('/admin/pending_enq');
});

// Pending -> Reject
router.get('/pending_reject/:id', async (req, res) => {
    var id = req.params.id;

    await exe(
        "UPDATE contact_save SET cstatus='reject' WHERE cid=?",
        [id]
    );

    res.redirect('/admin/pending_enq');
});


// ================= Confirm =================

router.get('/confirm_enq', async (req, res) => {
    var data = await exe("SELECT * FROM contact_save WHERE cstatus='confirm'");
    res.render('admin/confirm_enq.ejs', { data });
});

// Confirm -> Reject
router.get('/confirm_reject/:id', async (req, res) => {
    var id = req.params.id;

    await exe(
        "UPDATE contact_save SET cstatus='reject' WHERE cid=?",
        [id]
    );

    res.redirect('/admin/confirm_enq');
});


// ================= Reject =================

router.get('/reject_enq', async (req, res) => {
    var data = await exe("SELECT * FROM contact_save WHERE cstatus='reject'");
    res.render('admin/reject_enq.ejs', { data });
});

// Reject -> Confirm
router.get('/reject_confirm/:id', async (req, res) => {
    var id = req.params.id;

    await exe(
        "UPDATE contact_save SET cstatus='confirm' WHERE cid=?",
        [id]
    );

    res.redirect('/admin/reject_enq');
});




module.exports = router;




