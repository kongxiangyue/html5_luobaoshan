function check()
{  
 fr = document.regist;
 if(fr.username.value=="")//用户名不能为空
 {
alert("用户ID必须要填写！");
fr.username.focus();
 return false;
 }
 if((fr.password1.value != "") || (fr.password2.value != ""))//两次密码输入必须一致
 {
if(fr.password1.value!=fr.password2.value)
 {
 alert("密码不一致,请重新输入并验证密码！");
fr.password1.focus();
 return false;
 }
 }
 else {//密码也不能为空
alert("密码不能为空！");
fr.password1.focus();
 return false;
 }
 
if(fr.gender.value == "")//性别必须填写
 {
alert("性别必须要填写！");
fr.username.focus();
 return false;
 }
 if(fr.email.value != "")//验证email的格式
 {
if(!isEmail(fr.email.value)) {
 alert("请输入正确的邮件名称！");
fr.email.focus();
 return false;
 }
 }
 fr.submit();
}

function isEmail(theStr){
    var atindex=theStr.indexOf('@');
    var dotindex=theStr.indexOf('.',atindex);
    var flag=true;
    thesub=theStr.substring(0,dotindex+1);
    if((atindex<1)||(atindex!=theStr.lastIndexOf('@'))||(dotindex<atindex+2)||(theStr.length<=thesub.length)){
      flag=false;
    }else{
      flag=true;
    }
    return(flag);
}