export function update(inputs: any, name: string, newValue: any) {
return {...inputs, [name]: {...inputs[name], valua: newValue } }

}