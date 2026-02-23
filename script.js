let interviewList = [];
let rejectedList = [];


let total = document.getElementById('total')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')


const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allJobCount = document.getElementById('all-job-count')

const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filter-section')


const allCardsSection = document.getElementById('all-cards')


function calculateCount() {
    total.innerText = allCardsSection.children.length
    allJobCount.innerText = allCardsSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}


function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allFilterBtn.classList.add('text-[#64748B]')
    interviewFilterBtn.classList.add('text-[#64748B]')
    rejectedFilterBtn.classList.add('text-[#64748B]')

    const selected = document.getElementById(id)

    selected.classList.add('bg-[#3B82F6]', 'text-white')

}


mainContainer.addEventListener('click', function (event) {
    if(event.target.classList.contains('interview-btn')){

    const parentNode = event.target.parentNode.parentNode
    const plantName = parentNode.querySelector('.plantName')
    const jobTitle = parentNode.querySelector('.job-title')
    const salary = parentNode.querySelector('.salary')
    const status = parentNode.querySelector('.status')
    const notes = parentNode.querySelector('.notes')

    status.innerText = 'Interview'


    // console.log(notes, salary, status, jobTitle, plantName)

    const cardInfo = {
        plantName,
        jobTitle,
        salary,
        status,
        notes
    }

    // console.log(cardInfo)

    const plantExist = interviewList.find(item => item.plantName == cardInfo.plantName)



    if (!plantExist) {
        interviewList.push(cardInfo)
    }
    // console.log(interviewList)

    calculateCount()

    renderInterview()
        
    }


})

function renderInterview(){
    filterSection.innerHTML = ''

    for(let interview of interviewList){
        console.log(interview)
        let div = document.createElement('div')
        div.className = 'flex justify-between shadow p-5 mt-5'
        div.innerHTML = `

        <div class="mt-5">
                    <div class="">
                        <h1 class="plantName font-bold">Mobile First Corp</h1>
                        <p class="job-title text-[#64748B]">React Native Developer</p>
                    </div>
                    <div class="salary flex gap-2 my-5">
                        <span class="text-[#64748B]">Remote</span>
                        <span class="text-[#64748B]"><span class="mr-2">•</span> Full-time</span>
                        <span class=" text-[#64748B]"><span class="mr-2">•</span>$130,000 - $175,000</span>
                    </div>
                    <div class="flex">
                        <p class="status px-5 py-2 bg-[#EEF4FF] ">Not Applied</p>
                    </div>
                    <div class="">
                        <p class="notes">Build cross-platform mobile applications using React Native. Work on products
                            used by millions of
                            users worldwide.</p>
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
