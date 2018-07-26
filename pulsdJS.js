function AddToDB {

  var vEventName = document.getElementById("EventName").value;
  var vDescription = document.getElementById("Description").value;
  var vLocation = document.getElementById("Location").value;
  var vDay = document.getElementById("Day").value;
  var vMonth = document.getElementById("Month").value;
  var vYear = document.getElementById("Year").value;
  var vStartTime = document.getElementById("StartTime").value;
  var vPrice = document.getElementById("Price").value;


      $.ajax({
        type: "POST",
        url: "Events",
        data: { EventName: vEventName; Description: vDescription; Location: vLocation
            Day: vDay; Month: vMonth; Year: vYear; StartTime: vStartTime;
            Price: vPrice},,
    });

}

function AddtoAllEvents {

      $.ajax({
          type: "GET",
          url: "Event",
          data: { EventName: vEventName; Description: vDescription; Location: vLocation
              Day: vDay; Month: vMonth; Year: vYear; StartTime: vStartTime;
              Price: vPrice},,
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (response)
          {

          var vResponse = response;

          window.open("https://allevents.in/manage/create.php?ref=home-page-topbar");

          document.getElementById('eventname') = vResponse[0]["EventName"];
          document.getElementById('event_description') = vResponse[0]["Description"];
          document.getElementById('event_venue') = vResponse[0]["Location"];
          document.getElementById('startdate') = vResponse[0]["Year"] + "-" + vResponse[0]["Month"] + "-" + vResponse[0]["Day"];
          document.getElementById('st') = vResponse[0]["StartTime"];

          window.open("https://www.eventbrite.com/create?success=1&pckg=Essentials");
          document.getElementById('id_group-details-name') = vResponse[0]["EventName"];
          document.getElementById('id_group-details-description') = vResponse[0]["Description"];
          document.getElementById('id_group-location-venue') = vResponse[0]["Location"];
          document.getElementById('id_group-details-start_date') = vResponse[0]["Year"] + "-" + vResponse[0]["Month"] + "-" + vResponse[0]["Day"];
          document.getElementById('id_group-details-start_time') = vResponse[0]["StartTime"];
          document.getElementById('price').innerHTML = vResponse[0]["Price"];

          window.open("http://eventful.com/create?events-pckg")
          document.getElementById('eventname') = vResponse[0]["EventName"];
          document.getElementById('eventdescription') = vResponse[0]["Description"];
          document.getElementById('eventlocation') = vResponse[0]["Location"];
          document.getElementById('eventdate') = vResponse[0]["Year"] + "-" + vResponse[0]["Month"] + "-" + vResponse[0]["Day"];
          document.getElementById('eventstarttime') = vResponse[0]["StartTime"];

          window.open("http://donyc.com/events/new")
          document.getElementById('event_name') = vResponse[0]["EventName"];
          document.getElementById('event_description') = vResponse[0]["Description"];
          document.getElementById('event_venue') = vResponse[0]["Location"];
          document.getElementById('event_date') = vResponse[0]["Year"] + "-" + vResponse[0]["Month"] + "-" + vResponse[0]["Day"];
          document.getElementById('event_starttime') = vResponse[0]["StartTime"];

          window.open("http://heylets.com/events/create?new")
          document.getElementById('eName') = vResponse[0]["EventName"];
          document.getElementById('eDescription') = vResponse[0]["Description"];
          document.getElementById('eLocation') = vResponse[0]["Location"];
          document.getElementById('eDate') = vResponse[0]["Year"] + "-" + vResponse[0]["Month"] + "-" + vResponse[0]["Day"];
          document.getElementById('eStartTime') = vResponse[0]["StartTime"];



          },
          failure: function (response)
          {
              alert(response.d);
          }


      });

}


