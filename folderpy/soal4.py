totalBelanja = int(input("Masukan total belanjaan kamu : "))

hadiah = ["Kaos Kaki", "Alat Tulis", "Baju Kaos", "Sepeda"]

if totalBelanja == 500000 : 
    print("Kamu mendapatkan ", hadiah[1])
elif totalBelanja > 500000 and totalBelanja <= 1000000 : 
    print("Kamu mendapatkan ", hadiah[2])
elif totalBelanja > 1000000  : 
    print("Kamu mendapatkan ", hadiah[3])
else :
    print("Kamu mendapatkan ", hadiah[0])