let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'


let total = document.getElementById('total')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')


const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allJobCount = document.getElementById('all-job-count')

const deleteBtn = document.getElementsByClassName('delete-btn')
const iconSection = document.getElementById('icon') 

const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filter-section')


const allCardsSection = document.getElementById('all-cards')


function calculateCount() {
    total.innerText = allCardsSection.children.length
    allJobCount.innerText = allCardsSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount()


function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allFilterBtn.classList.add('text-[#64748B]')
    interviewFilterBtn.classList.add('text-[#64748B]')
    rejectedFilterBtn.classList.add('text-[#64748B]')

    const selected = document.getElementById(id)
    currentStatus = id;
    
    

    selected.classList.add('bg-[#3B82F6]', 'text-white')

    if (id == 'interview-filter-btn') {
        allCardsSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderInterview()
        if(interviewList == 0){
            iconSection.classList.remove('hidden')
        }
        else{
            iconSection.classList.add('hidden')
        }
    }
    else if (id == 'all-filter-btn') {
        allCardsSection.classList.remove('hidden')
        filterSection.classList.add('hidden')
    }
    else if (id == 'rejected-filter-btn') {
        allCardsSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderRejected()
        
        if(rejectedList == 0){
            iconSection.classList.remove('hidden')
        }
        else{
            iconSection.classList.add('hidden')
        }
    }

}

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {

        const parentNode = event.target.parentNode.parentNode
        const plantName = parentNode.querySelector('.plantName').innerText
        const jobTitle = parentNode.querySelector('.job-title').innerText
        const location = parentNode.querySelector('.location').innerText
        const time = parentNode.querySelector('.time').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText

        // console.log(location, time, salary)

        parentNode.querySelector('.status').innerText = 'Interview'


        // console.log(notes, salary, status, jobTitle, plantName)

        const cardInfo = {
            plantName,
            jobTitle,
            location,
            time,
            salary,
            status: 'Interview',
            notes
        }

        // console.log(cardInfo)

        const plantExist = interviewList.find(item => item.plantName == cardInfo.plantName)



        if (!plantExist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item=> item.plantName != cardInfo.plantName)
        
        if(currentStatus == 'rejected-filter-btn'){
            renderRejected()
        }

        calculateCount()

        // console.log(interviewList)

        // renderInterview()

    }
    if (event.target.classList.contains('rejected-btn')) {

        const parentNode = event.target.parentNode.parentNode
        const plantName = parentNode.querySelector('.plantName').innerText
        const jobTitle = parentNode.querySelector('.job-title').innerText
        const location = parentNode.querySelector('.location').innerText
        const time = parentNode.querySelector('.time').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText

        // console.log(location, time, salary)

        parentNode.querySelector('.status').innerText = 'Rejected'


        // console.log(notes, salary, status, jobTitle, plantName)

        const cardInfo = {
            plantName,
            jobTitle,
            location,
            time,
            salary,
            status: 'Rejected',
            notes
        }

        // console.log(cardInfo)

        const plantExist = rejectedList.find(item => item.plantName == cardInfo.plantName)



        if (!plantExist) {
            rejectedList.push(cardInfo)
        }
        

        interviewList = interviewList.filter(item=> item.plantName != cardInfo.plantName)

        if(currentStatus == 'interview-filter-btn'){
            renderInterview()
        }

        calculateCount()

        // console.log(interviewList)

        // renderInterview()

    }


})

function renderInterview() {
    filterSection.innerHTML = ''

    for (let interview of interviewList) {
        console.log(interview)
        let div = document.createElement('div')
        div.className = 'flex justify-between shadow p-5 mt-5'
        div.innerHTML = `

        <div class="mt-5">
                    <div class="">
                        <h1 class="plantName font-bold">${interview.plantName}</h1>
                        <p class="job-title text-[#64748B]">${interview.jobTitle}</p>
                    </div>
                    <div class="flex gap-2 my-5">
                        <span class="text-[#64748B] location">${interview.location}</span>
                        <span class="text-[#64748B] time"><span class="mr-2">•</span>${interview.time}</span>
                        <span class=" text-[#64748B] salary"><span class="mr-2">•</span>${interview.salary}</span>
                    </div>
                    <div class="flex">
                        <p class="status px-5 py-2 bg-[#EEF4FF] ">${interview.status}</p>
                    </div>
                    <div class="">
                        <p class="notes">${interview.notes}</p>
                    </div>

                    <div class="mt-5 flex gap-3">
                        <button
                            class="interview-btn border border-[#10B981] text-[#10B981] px-5 py-2 uppercase">interview</button>
                        <button
                            class="rejected-btn border border-[#EF4444] text-[#EF4444] px-5 py-2 uppercase">Rejected</button>
                    </div>
                </div>

                <!-- main part 2 -->
                <div class="">
                    <img class="delete-btn border border-[#64748B] p-2 rounded-full" src="img/Vector.png" alt="">
                </div>
        
        `

        filterSection.appendChild(div)


    }
}

function renderRejected() {
    filterSection.innerHTML = ''

    for (let rejected of rejectedList) {
        // console.log(interview)
        let div = document.createElement('div')
        div.className = 'flex justify-between shadow p-5 mt-5'
        div.innerHTML = `

        <div class="mt-5">
                    <div class="">
                        <h1 class="plantName font-bold">${rejected.plantName}</h1>
                        <p class="job-title text-[#64748B]">${rejected.jobTitle}</p>
                    </div>
                    <div class="flex gap-2 my-5">
                        <span class="text-[#64748B] location">${rejected.location}</span>
                        <span class="text-[#64748B] time"><span class="mr-2">•</span>${rejected.time}</span>
                        <span class=" text-[#64748B] salary"><span class="mr-2">•</span>${rejected.salary}</span>
                    </div>
                    <div class="flex">
                        <p class="status px-5 py-2 bg-[#EEF4FF] ">${rejected.status}</p>
                    </div>
                    <div class="">
                        <p class="notes">${rejected.notes}</p>
                    </div>

                    <div class="mt-5 flex gap-3">
                        <button
                            class="interview-btn border border-[#10B981] text-[#10B981] px-5 py-2 uppercase">interview</button>
                        <button
                            class="rejected-btn border border-[#EF4444] text-[#EF4444] px-5 py-2 uppercase">Rejected</button>
                    </div>
                </div>

                <!-- main part 2 -->
                <div class="">
                    <img class="delete-btn border border-[#64748B] p-2 rounded-full" src="img/Vector.png" alt="">
                </div>
        
        `

        filterSection.appendChild(div)
    }
}
