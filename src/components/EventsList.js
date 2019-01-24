import  React, { Component } from  'react';
import  EventsService  from  './EventsService';

const  eventsService  =  new  EventsService();

class  EventsList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {events: [], nextPageURL:  ''};
    this.nextPage  =  this.nextPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    eventsService.getEvents().then(function (result) {self.setState({ events:  result.data, nextPageURL:  result.nextlink})});
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
                <th className="centercolumn mobilehide">When?</th>
                <th className="centercolumn mobilehide">Where?</th>
                <th className="centercolumn mobilehide">How Bad?</th>
                <th className="mobilehide">Category?</th>
                <th className="centercolumn mobilehide">Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.state.events.map( c  =>
                <tr key={c.pk}>
                <td>{c.SourceURL}</td>
                <td className="centercolumn mobilehide">{c.DateAdded}</td>
                <td className="centercolumn mobilehide">{c.DataMapCountry}</td>
                <td className="centercolumn mobilehide">{c.GoldsteinScale}</td>
                <td className="mobilehide">{c.EventCode}</td>
                <td className="centercolumn mobilehide">
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
