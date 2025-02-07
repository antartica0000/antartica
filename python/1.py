'''
pip install opencv-python-headless pillow
video player
'''

import cv2
import tkinter as tk
from tkinter import filedialog
from PIL import Image, ImageTk
import threading

class VideoPlayer:
    def __init__(self, root):
        self.root = root
        self.root.title("Video Player")

        self.video_source = None
        self.vid = None
        self.is_playing = False

        # Create a canvas for video frames
        self.canvas = tk.Canvas(root, bg='black')
        self.canvas.pack(fill=tk.BOTH, expand=True)

        # Create Play and Stop buttons
        self.play_button = tk.Button(root, text="Play", command=self.play_video)
        self.play_button.pack(side=tk.LEFT)
        self.stop_button = tk.Button(root, text="Stop", command=self.stop_video)
        self.stop_button.pack(side=tk.LEFT)

        # Create a menu for file loading
        self.menu = tk.Menu(root)
        root.config(menu=self.menu)
        self.file_menu = tk.Menu(self.menu)
        self.menu.add_cascade(label="File", menu=self.file_menu)
        self.file_menu.add_command(label="Open", command=self.open_file)

    def open_file(self):
        self.video_source = filedialog.askopenfilename(filetypes=[("Video Files", "*.mp4;*.avi")])
        if self.video_source:
            self.vid = cv2.VideoCapture(self.video_source)
            self.is_playing = False
            self.canvas.delete("all")

    def play_video(self):
        if self.vid and not self.is_playing:
            self.is_playing = True
            self._play()

    def stop_video(self):
        self.is_playing = False

    def _play(self):
        if self.is_playing:
            ret, frame = self.vid.read()
            if ret:
                frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                image = Image.fromarray(frame)
                photo = ImageTk.PhotoImage(image=image)
                self.canvas.create_image(0, 0, image=photo, anchor=tk.NW)
                self.canvas.image = photo  # Keep a reference to avoid garbage collection
                self.root.after(10, self._play)
            else:
                self.vid.set(cv2.CAP_PROP_POS_FRAMES, 0)  # Loop video
                self._play()

if __name__ == "__main__":
    root = tk.Tk()
    app = VideoPlayer(root)
    root.mainloop()
