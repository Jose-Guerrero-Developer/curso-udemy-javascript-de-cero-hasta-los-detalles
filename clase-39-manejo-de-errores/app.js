var name = 'Susana Alexandra López Medina'

try {
    throw new Error('Cancelando la ejecución')
    console.log('Usuario:',name)
} 
catch (execption) {
    console.log(execption)
} 
finally {
    console.log('Operación completada')
}