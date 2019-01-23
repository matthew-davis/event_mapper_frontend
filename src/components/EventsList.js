import  React, { Component } from  'react';
import  EventsService  from  './EventsService';

const  eventsService  =  new  EventsService();

class  EventsList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        events: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    eventsService.getEvents().then(function (result) {
        console.log(result);
        self.setState({ events:  result.data, nextPageURL:  result.nextlink})
    });
}
handleDelete(e,pk){
    var  self  =  this;
    eventsService.deleteEvent({pk :  pk}).then(()=>{
        var  newArr  =  self.state.events.filter(function(obj) {
            return  obj.pk  !==  pk;
        });

        self.setState({events:  newArr})
    });
}

nextPage(){
    var  self  =  this;
    console.log(this.state.nextPageURL);
    eventsService.getEventsByURL(this.state.nextPageURL).then((result) => {
        self.setState({ events:  result.data, nextPageURL:  result.nextlink})
    });
}
render() {

    return (
      <div className="listofevents">
        <button className="btn btn-secondary btn-sm desktophide createanevent" onClick={()=> window.location.href = "/event/" }>Create An Event</button>
        <div  className="events--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>What Happened?</th>
                <th className="mobilehide">When?</th>
                <th className="mobilehide">Where</th>
                <th className="mobilehide">How Bad is it?</th>
                <th className="mobilehide">Category</th>
                <th className="mobilehide">Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.state.events.map( c  =>
                <tr  key={c.pk}>
                <td>{c.SourceURL}</td>
                <td className="mobilehide">{c.DateAdded}</td>
                <td className="mobilehide">{c.ActionGeo_Lat}, {c.ActionGeo_Long}</td>
                <td className="mobilehide">{c.GoldsteinScale}</td>
                <td className="mobilehide">{c.EventCode}</td>
                <td className="mobilehide">
                  <button className="btn btn-warning btn-sm" onClick={()=> window.location.href = "/event/" + c.pk }>Update</button>
                  &nbsp;&nbsp;
                  <button className="btn btn-danger btn-sm" onClick={(e)=>  this.handleDelete(e,c.pk) }>Delete</button>
                </td>
            </tr>)}
            </tbody>
            </table>
            <button className="btn btn-secondary" onClick=  {  this.nextPage  }>Next Page</button>
        </div>
      </div>
        );
  }
}
export  default  EventsList;
