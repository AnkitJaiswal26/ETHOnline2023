export function timeConverter(UNIX_timestamp) {
    //console.log(UNIX_timestamp)
      var a = new Date(UNIX_timestamp * 1000);
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = ()=>{
        if(a.getDate()<10){
          return "0"+a.getDate()
        }
        return a.getDate()
      };
      var hour = a.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
      // var min = a.getMinutes();
      // var sec = a.getSeconds();
      var time =
        date() + " " + month + " " + year + " " + hour;
      return time+" (IST)";
  }