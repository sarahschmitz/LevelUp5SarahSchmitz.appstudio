
deleteUpdateCustomer.onshow=function(){
  let query = "SELECT name FROM customer;" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query)

    if (req1.status == 200) { 
        let results = JSON.parse(req1.responseText)
              
      if (results.length == 0)
        NSB.MsgBox("There are no customers with that name.")
      else {        
        for (i=0; i<= results.length - 1; i++){
      drpCompanies.addItem(results[i])
          }
}

  } else 
        NSB.MsgBox(`Error code: ${req1.status}`)
}


////////////////////////////////////////////////


drpCompanies1.onclick=function(s){
  if (typeof(s)=="object"){
    return
  }else
  company = s
}
}

//////////////////////////////////////////////


btnSubmit.onclick=function(){
  if (btnUpdateDelete.value == 0){

 check = company
  newName = inptUpdate.value
  query1 = "SELECT * FROM customer WHERE name = " + '"' + check + '"'  ;
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query1)
    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log(results)
        if (results.length == 0)
            NSB.MsgBox("There are no customers of that name.")
          else { 
            query2 = "UPDATE customer SET name = " + '"' + newName + '"' + "WHERE name =" + '"' + check + '"' ;
            req3 = AjaxAjax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query2)
            query3 = "SELECT DISTINCT name FROM customer;" 
            req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query3)
            results = JSON.parse(req4.responseText)
            console.log("the parsed JSON is " + results)
            let message = ""
            for (i=0; i<= results.length - 1; i++){
                message = (message + (results[i][0]) + "\n");
              }
            console.log(message)
            txtResults1.value = message;
          } 
          
  } else

        NSB.MsgBox("Error code: " + req1.status)
}

  }
else {
  check = drpCompanies1.value
  let query = "SELECT * FROM customer WHERE name = " + "'"+ check + '"' 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query)
  if (req1.status == 200) {
  results = JSON.parse(req1.responseTest)
  if (resuls.length == 0)
  NSB.MsgBox("There are no customers")
else {
  query = "DELETE FROM customer WHERE name = " + '"' + check + '"'
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query)
query2 = "SELECT * FROM customer"
req3 =  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query2)
  results = JSON.parse(req3.responseText)
  let message = ''
  for (i=0; i <= results.length -1; i++)
    message = message + results[i][1] + "\n"
    txtResults1.value = message
  }
}

