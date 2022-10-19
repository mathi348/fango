
negativos=0
positivos=0
mult15=0
valpares=0
for x in range (5):
    valor=int(input("ingrese un valor"))
    if valor<0:
        negativos+=1
    else:
        if valor>0:
            positivos+=1
    if valor%15==0:
        mult15+=1
    if valor%2==0:
        valpares+=valor
print ("cantidad de numeros negativos")
print (negativos)
print ("cantidad de numeros positivos")
print (positivos)
print ("cantidad de numeros multiplos de 15")
print (mult15)
print ("cantidad acumulada de los numeros de valores pares")
print (valpares)


