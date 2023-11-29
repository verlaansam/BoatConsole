import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="get",
  password="Readonly",
  database="boatconsole"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM MOCK_DATA WHERE id = 1;")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)