# Padrão inesperado surge quando limit = 100 (sequência 1,4,9,16,25,...)
# Se o número que indica o index+1 tem um número par de divisores, então ele virará 0. Caso contrário, 1.
# O padrão é explicado pelo fato de os quadrados perfeitos serem os únicos números com uma 
# quantidade ímpar de divisores.
arr = []
for _ in range(10):
    arr.append([0,0,0,0,0,0,0,0,0,0])
count, num, limit = 1, 0, int(input())
while count <= limit:
    for i in range(10):
        for j in range(10):
            num = 10*i + j + 1
            if (num%count == 0):
                if (arr[i][j] == 0):
                    arr[i][j] = 1
                else:
                    arr[i][j] = 0
    count += 1
print(arr)