
seeCustomers.onshow=function(){
  let query = "SELECT name FROM customer;" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query)

    if (req1.status == 200) { 
        let results = JSON.parse(req1.responseText)
              
      if (results.length == 0)
        NSB.MsgBox("There are no customers with that name.")
      else {        
        for (i=0; i<= results.length - 1; i++){
      txtResults2.addItem(results[i])
          }
}

  } else 
        NSB.MsgBox(`Error code: ${req1.status}`)
}


btnSubmit2.onclick=function(){
  let name = inptName.value
  let street = inptStreet.value
  let state = inptState.value
  let city = inptCity.value
  let zip = inptZip.value
  
  let query = 'INSERT INTO customer (name, street, state, city, zip) VALUES ('" + name + "', '" + street + "', '" + city + "','" + state + "','" + zipcode"')'

req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query);

    if (req1.status == 200) { 
        if (req1.responseText == 500) {   
            var result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the customer!")
        } else
            NSB.MsgBox("There was a problem with adding the customer to the database.")
    } else {

        NSB.MsgBox("Error: " + req1.status);
    }  

}
