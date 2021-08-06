    //                  0         1       2          3          4
    const nomes = ['Helison', 'Caio', 'Caren', 'Alexsandra', 'Cael'];

    // Pop remove do começo, Shift do final e push acrescenta
    const removido = nomes.pop();
    const novo = [...nomes];
    nomes.push('Silvana');

    novo.pop();


    // const nomes  = new Array('Caio', 'Alexsandra', 'Caren');

    console.log(nomes, removido);
    console.log(novo);