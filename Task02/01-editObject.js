let objectData = [
  {
    name: 'Tatas',
    company: 'Arkademy',
    job: 'Trainer',
    status: 'single',
    city: 'Jogja'
  },
  {
    name: 'Pratama',
    company: 'Emago',
    job: 'Trainer',
    status: 'single',
    city: 'Jakarta'
  }
]

function changeData() {
  let spreadData = objectData.map(data => {
    let spreaded = {...data}

    if(spreaded.name === 'Tatas') {
      spreaded.status = 'married'
      spreaded.city = 'Jakarta'
    }

    if(spreaded.name === 'Pratama') {
      spreaded.company = 'Arkademy'
      spreaded.city = 'Jogja'
    }

    return spreaded
  })

  console.log(spreadData)
}

changeData()