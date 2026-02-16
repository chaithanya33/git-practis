import time
import os

name = "Chaitanya"

def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")

def typing_animation(text, delay=0.2):
    for ch in text:
        print(ch, end="", flush=True)
        time.sleep(delay)
    print()

def blink_animation(text, times=3):
    for _ in range(times):
        clear_screen()
        print(text)
        time.sleep(0.5)
        clear_screen()
        time.sleep(0.5)

def moving_animation(text, width=30):
    for i in range(width):
        clear_screen()
        print(" " * i + text)
        time.sleep(0.1)

def reverse_animation(text):
    for i in range(len(text), 0, -1):
        clear_screen()
        print(text[:i])
        time.sleep(0.2)

# -------- MAIN PROGRAM --------
clear_screen()

typing_animation("Hello! My name is...")
time.sleep(1)

typing_animation(name, 0.3)
time.sleep(1)

blink_animation(name)
time.sleep(1)

moving_animation(name)
time.sleep(1)

reverse_animation(name)

typing_animation("Animation Complete ✅")

