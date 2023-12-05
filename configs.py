
import mysql.connector

mydb = mysql.connector.connect(
    host = "localhost",
    banco = "formulariocadastro",
    user = "root",
    senha = ""
)

mycursor = mydb.cursor()

mycursor.execute("CREATE TABLE custumers (name VARCHAR(255), address VARCHAR(255))")