

import math

sisi = 10
jari = sisi / 2

kubus = sisi * sisi
setengah = (math.pi * (jari ** 2)) / 2

luas = kubus + (setengah * 2)

kelilingKubus = sisi + sisi
kelilingLingkaran = 2 * math.pi * jari

hasil = kelilingKubus + kelilingLingkaran

print("Luas bangun biru tersebut adalah : ", round(luas,1), "cm2")
print("Keliling bangun biru tersebut adalah : ", round(hasil,1), "cm")

