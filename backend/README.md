## Backend - Notes

- Start up virtual env ```workon <NAME OF ENV>```
- Start up server ```python manage.py runserver```

If there are any changes to the models:
  - View migrations ```python manage.py showmigrations```
  - Run migrations ```python manage.py migrate```

Practice using ORM - ```python manage.py shell```

## CORS Notes

- [Understanding CORS](https://medium.com/@baphemot/understanding-cors-18ad6b478e2b)

Essentially, CORS (Cross Origin Resource Sharing) prevents making HTTP requests to servers of a different domain.

Why? To prevent attackers from making API calls using your information.
Example:
  - On a website with your credit card information www.buyingstuff.com
  - The website has a malicious ad with a script to call an API with your credit card information
  www.stealyourstuff.com/api/v1

Without CORS the malicious script would be able to execute a request to another server with your data. But CORS prevents that from happening!

If can be a pain for development because CORS also blocks the different ports. So to get around it, you have to whitelist certain domains --> Access-Control-Allow-Origin

--- Another quirk:
This is why I encountered the CORS error ... very important note! ``` You're accessing the development server over HTTPS, but it only supports HTTP.```

To run development over HTTPS, you need to link up with Apache or Nginx
