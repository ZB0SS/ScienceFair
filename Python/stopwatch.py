import time

class Stopwatch:
	def __init__(self):
		self.startMs = None
		self.totalTime = None

	def start(self):
		self.startMs = int(time.time() * 1000)


	def stop(self):
		self.totalTime =  int(time.time() * 1000) - self.startMs


