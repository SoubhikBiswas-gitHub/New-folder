// let dynamicOrderStatus=document.getElementById(dynamicOrderStatus);
const chefReceived = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			dynamicOrderStatus.textContent = 'Chef Received'
			resolve(dynamicOrderStatus)
		}, 2000)
	})
}

const pizzaSauceAdded = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			dynamicOrderStatus.textContent = 'Pizza Sauce added'
			resolve(dynamicOrderStatus)
		}, 10000)
	})
}

const firstLayerOfCheezeAdded = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			dynamicOrderStatus.textContent = 'First layer of cheeze added'
			resolve(dynamicOrderStatus)
		}, 5000)
	})
}

const toppingsAdded = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			dynamicOrderStatus.textContent = 'Toppings added'
			resolve(dynamicOrderStatus)
		}, 12000)
	})
}

const secondLayerOfCheezeAdded = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			dynamicOrderStatus.textContent = 'Second layer of cheeze added'
			resolve(dynamicOrderStatus)
		}, 5000)
	})
}

const pizzaBaked = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			dynamicOrderStatus.textContent = 'Pizza baked!'
			resolve(dynamicOrderStatus)
		}, 15000)
	})
}

const oreganoAddedAndPacked = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			dynamicOrderStatus.textContent = 'Oregano added and packed'
			resolve(dynamicOrderStatus)
		}, 8000)
	})
}

const packageReceivedAtCounter = (dynamicOrderStatus) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			dynamicOrderStatus.textContent = 'Package received at counter'
			resolve()
		}, 2000)
	})
}