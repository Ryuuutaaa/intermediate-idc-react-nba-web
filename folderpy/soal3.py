import math

diameter = 12
radius =  diameter /2 
luas = math.pi * (radius ** 2)

hasil = round(luas,2)

print("luas lingkaran dengan diameter ", diameter , " adalah ", hasil, "cm", 
      " dibulatkan menjadi ", round(hasil), "cm")