import schedule
import time
import os

def job():
    os.system("npm run build")

schedule.every(5).minutes.do(job)

while True:
    schedule.run_pending()
    time.sleep(1)