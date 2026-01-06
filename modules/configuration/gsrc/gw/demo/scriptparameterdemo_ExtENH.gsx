package gw.demo

enhancement scriptparameterdemo_ExtENH : studentData_Ext {

  public static function  findAddress(stud:studentData_Ext)  {
    //if(this.Age <= 18) this is hardcording the number 18. to make it configurable we use Scriptparameters
    if(stud.Age <= ScriptParameters.StudentAge)
      stud.Address = "India"   //now u have to call this function.as address is depended on Age we enable postonchange on Age
  }
}
