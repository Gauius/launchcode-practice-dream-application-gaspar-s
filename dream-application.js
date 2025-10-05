/*
PSEUDOCODE

Start
  login page
    if username in list
      ask for password
        if password in list
          product search page
        else
          wrong password
    else
      sign up page
  sign up
    while user name not available
      ask for user name
    available
      accept user name
      create password
        validate password
          while password not valid
            ask for password
          valid
            accept password
            log in page
  product search page
    search choices
      if not lazada and not shopee (default)
       two column result page
      else if lazada and shopee
        two column result page
      else
        one column result page
  result page
    filter choices
      sort by price
      sort by release
      sort by review
      sort by sold count
    two column result page
      Lazada and Shopee product list
    on column result page
      Lazada or Shopee product list
  product list
    product order
      filter chosen
    product count
      if n
        show n
      else
        show all
End
*/
