import React, { Component } from 'react';
import EventsService from './EventsService';

const eventsService = new EventsService();

class EventCreateUpdate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          eventsService.getEvent(params.pk).then((c)=>{
            this.refs.globaleventid.value = c.GlobalEventID;
            this.refs.whathappened.value = c.SourceURL;
            this.refs.when.value = c.DateAdded;
            this.refs.wherelatitude.value = c.ActionGeo_Lat;
            this.refs.wherelongitude.value = c.ActionGeo_Long;
            this.refs.iso3166.value = c.DataMapCountry;
            this.refs.howbadisit.value = c.GoldsteinScale;
            this.refs.category.value = c.EventCode;
          })
        }

          var currentDate = new Date(),
          day = ('0' + currentDate.getDate()).slice(-2),
          month = ('0' + currentDate.getMonth() + 1).slice(-2),
          year = currentDate.getFullYear(),
          hour = ('0' + currentDate.getHours()).slice(-2),
          minute = ('0' + currentDate.getMinutes()).slice(-2),
          second = ('0' + currentDate.getSeconds()).slice(-2);
          document.getElementById('dateofevent').value = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            alert("Geolocation is not supported by this browser.");
          }

          function showPosition(position) {
            document.getElementById("formlatitude").value = position.coords.latitude;
            document.getElementById("formlongitude").value = position.coords.longitude;
          }
      }

      handleCreate(){
        eventsService.createEvent(
          {
            "GlobalEventID": 0,
            "SourceURL": this.refs.whathappened.value,
            "DateAdded": this.refs.when.value,
            "ActionGeo_Lat": this.refs.wherelatitude.value,
            "ActionGeo_Long": this.refs.wherelongitude.value,
            "DataMapCountry": this.refs.iso3166.value,
            "GoldsteinScale": this.refs.howbadisit.value,
            "EventCode": this.refs.category.value
        }
        ).then((result)=>{
          window.location.href = "/";
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }

      handleUpdate(pk){
        eventsService.updateEvent(
          {
            "pk": pk,
            "GlobalEventID": this.refs.globaleventid.value,
            "SourceURL": this.refs.whathappened.value,
            "DateAdded": this.refs.when.value,
            "ActionGeo_Lat": this.refs.wherelatitude.value,
            "ActionGeo_Long": this.refs.wherelongitude.value,
            "DataMapCountry": this.refs.iso3166.value,
            "GoldsteinScale": this.refs.howbadisit.value,
            "EventCode": this.refs.category.value
        }
        ).then((result)=>{
          window.location.href = "/";
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }

      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }

      render() {
        return (
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <form onSubmit={this.handleSubmit}>
                <p>&nbsp;</p>
                <div className="form-group">
                  <input type="hidden" id="globaleventid" ref="globaleventid" value="" />
                  <label>What Happened?</label>
                  <input className="form-control" type="text" ref='whathappened' />
                  <label>When?</label>
                  <input id="dateofevent" className="form-control" disabled="disabled" type="text" ref='when' />
                  <label>Where Latitude?</label>
                  <input id="formlatitude" className="form-control" disabled="disabled" type="text" ref='wherelatitude' value="56.4581" />
                  <label>Where Longitude?</label>
                  <input id="formlongitude" className="form-control" disabled="disabled" type="text" ref='wherelongitude' value="2.9858" />
                  <label>ISO 3166 Alpha 3 Country Code?</label>
                  <input className="form-control" type="text" ref='iso3166' />
                  <label>How Bad is it?</label>
                  <input className="form-control" disabled="disabled" type="text" ref='howbadisit' value="0.0" />
                  <label>Category?</label>
                  <select className="form-control" id="category" ref="category">
                    <option defaultValue> -- select an option -- </option>
                    <option value = 'Public Statement'>Public Statement</option>
                    <option value = 'Appealing'>Appealing</option>
                    <option value = 'Intending to cooperate'>Intending to cooperate</option>
                    <option value = 'Consulting'>Consulting</option>
                    <option value = 'Diplomatic cooperation'>Diplomatic cooperation</option>
                    <option value = 'Material cooperation'>Material cooperation</option>
                    <option value = 'Providing aid'>Providing aid</option>
                    <option value = 'Yielding'>Yielding</option>
                    <option value = 'Investigating'>Investigating</option>
                    <option value = 'Demanding'>Demanding</option>
                    <option value = 'Disapproving'>Disapproving</option>
                    <option value = 'Rejecting'>Rejecting</option>
                    <option value = 'Threatening'>Threatening</option>
                    <option value = 'Protesting'>Protesting</option>
                    <option value = 'Exhibiting a force posture'>Exhibiting a force posture</option>
                    <option value = 'Reducing relations'>Reducing relations</option>
                    <option value = 'Coercing'>Coercing</option>
                    <option value = 'Assaulting'>Assaulting</option>
                    <option value = 'Fighting'>Fighting</option>
                    <option value = 'Unconditional mass violence'>Unconditional mass violence</option>
                  </select>
                  <p>&nbsp;</p>
                  <input className="btn btn-secondary" type="submit" value="Submit" />
                  <p>&nbsp;</p>
                </div>
              </form>
            </div>
            <div className="col-md-6 mobilehide">
              <p>&nbsp;</p>
              <p><strong>Image / Video Upload Section</strong></p>
              <p>It's selfie time!</p>
            </div>
          </div>
        );
      }
};
export default EventCreateUpdate;
