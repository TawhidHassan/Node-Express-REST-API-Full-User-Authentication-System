
import nodemailer from 'nodemailer'

const transport=nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:"sifat27.ht@gmail.com",
        pass:"Sifat15963740"
    }
});

const  sendmail=(email,sub,text,html)=>{
  
    const  option={
        from:"outlook_CF62E343D86D7F8A@outlook.com",
        to:email,
        subject:sub,
        text:text,
        html:html
    }
    

    transport.sendMail(option,function(err,info){
        if(err){
            console.log(err)
            return;
        }
        console.log(info.response);
    })
  
};

 


export default sendmail;