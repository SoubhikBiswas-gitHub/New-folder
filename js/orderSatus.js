const chefReceived = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(dynamicOrderStatus).innerText = 'Chef Received'
			resolve(dynamicOrderStatus)
		}, 2000)
	})
}

const pizzaSauceAdded = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(dynamicOrderStatus).innerText = 'Pizza Sauce added'
			resolve(dynamicOrderStatus)
		}, 10000)
	})
}

const firstLayerOfCheezeAdded = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(dynamicOrderStatus).innerText = 'First layer of cheeze added'
			resolve(dynamicOrderStatus)
		}, 5000)
	})
}

const toppingsAdded = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(dynamicOrderStatus).innerText = 'Toppings added'
			resolve(dynamicOrderStatus)
		}, 12000)
	})
}

const secondLayerOfCheezeAdded = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(dynamicOrderStatus).innerText = 'Second layer of cheeze added'
			resolve(dynamicOrderStatus)
		}, 5000)
	})
}

const pizzaBaked = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(dynamicOrderStatus).innerText = 'Pizza baked!'
			resolve(dynamicOrderStatus)
		}, 15000)
	})
}

const oreganoAddedAndPacked = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(dynamicOrderStatus).innerText = 'Oregano added and packed'
			resolve(dynamicOrderStatus)
		}, 8000)
	})
}

const packageReceivedAtCounter = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(dynamicOrderStatus).innerText = 'Package received at counter'
			resolve()
		}, 2000)
	})
}