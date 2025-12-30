package gw.demo

uses gw.api.database.IQueryBeanResult

uses gw.api.database.Query
uses gw.api.database.Relop

uses java.io.Serializable

class studentRecordSearch_Ext implements Serializable {
  public var _Country : typekey.Country_Ext as studentCountry  //declaring a public variable

  public function performSearch() : IQueryBeanResult<studentData_Ext>{
    var s = Query.make(studentData_Ext)

    if(this._Country != null)
      s.compare(studentData_Ext#Country, Relop.Equals, (this._Country))
    return s.select()
  }

}