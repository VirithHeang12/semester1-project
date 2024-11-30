<template>
    <div class="modal fade" id="payModal" tabindex="-1" aria-labelledby="payModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center text-primary-800 font-semibold text-[20px]" id="payModalLabel">
                        ការបញ្ជាទិញ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <form>
                        <div class="row">
                            <div class="col-6">
                                <label for="Fname" class="form-label text-primary-800 font-weight-semibold">នាមត្រកូល
                                </label>
                                <input type="text"
                                    class="form-control rounded-[6px] bg-slate-100 border-none focus:bg-slate-100 focus:outline-none"
                                    id="Fname" placeholder="" required>
                            </div>
                            <div class="col-6">
                                <label for="Lname" class="form-label text-primary-800 font-weight-semibold">នាមខ្លួន
                                </label>
                                <input type="text"
                                    class="form-control rounded-[6px] bg-slate-100 border-none focus:bg-slate-100 focus:outline-none"
                                    id="Lname" placeholder="" required>
                            </div>
                        </div>
                        <div class="row !mt-5">
                            <div class="col-12">
                                <label for="Email" class="form-label text-primary-800 font-weight-semibold">Email
                                    Address : </label>
                                <input type="email"
                                    class="form-control  rounded-[6px] bg-slate-100 border-none focus:bg-slate-100 focus:outline-none"
                                    id="Email" placeholder="Enter your email address" required>
                            </div>
                        </div>
                        <div class="row !mt-5">
                            <div class="col-4">
                                <label for="country"
                                    class="form-label text-primary-800 font-weight-semibold">ប្រទេស</label>
                                <select
                                    class="form-select form-control rounded-[6px] bg-slate-100 border-none focus:bg-slate-100 focus:outline-none"
                                    aria-label="Default select example">
                                    <option selected>កម្ពុជា</option>
                                    <option value="Australia">អូស្ត្រាលី</option>
                                    <option value="China">ចិន</option>
                                    <option value="Korea">កូរ៉េ</option>
                                    <option value="Japan">ជប៉ុន</option>
                                    <option value="English">អង់គ្លេស</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <label for="city"
                                    class="form-label text-primary-800 font-weight-semibold">ទីក្រុង</label>
                                <input type="text"
                                    class="form-control rounded-[6px] bg-slate-100 border-none focus:bg-slate-100 focus:outline-none"
                                    id="city">
                            </div>
                            <div class="col-4">
                                <label for="postalCode" class="form-label text-primary-800 font-weight-semibold">Postal
                                    Code</label>
                                <input type="number"
                                    class="form-control rounded-[6px] bg-slate-100 border-none focus:bg-slate-100 focus:outline-none"
                                    id="postalCode">
                            </div>
                        </div>
                        <div class="form-check !mt-5">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                            <label class="form-check-label text-primary-800 font-medium" for="flexCheckChecked">
                                រក្សាព័ត៌មាននេះសម្រាប់ពេលក្រោយ
                            </label>
                        </div>
                        <div class="col-12 !mt-5">
                            <div class="row">
                                <label for="card" class="form-label text-primary-800 font-weight-semibold">Credit card
                                    number</label>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-5">
                                    <input type="number"
                                        class="form-control rounded-[6px] bg-slate-100 border-none focus:bg-slate-100 focus:outline-none"
                                        id="card" required>
                                </div>
                                <div class="col-7">
                                    <div class="row g-2">
                                        <div class="col-2">
                                            <img src="/Visa Card/mastercard.svg" alt="">
                                        </div>
                                        <div class="col-2">
                                            <img src="/Visa Card/jcb.svg" alt="">
                                        </div>
                                        <div class="col-2">
                                            <img src="/Visa Card/generic.svg" alt="">
                                        </div>
                                        <div class="col-2">
                                            <img src="/Visa Card/visa-card.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 !mt-5">
                            <div class="row mb-4">
                                <label for="expires"
                                    class="form-label text-primary-800 font-weight-semibold">ថ្ងៃផុតកំណត់</label>
                                <div class="col-5">
                                    <select
                                        class="form-select form-control rounded-[6px] bg-slate-100 border-none focus:bg-slate-100 focus:outline-none"
                                        aria-label="Default select example">
                                        <option selected>2016</option>
                                        <option value="1">2018</option>
                                        <option value="2">2019</option>
                                        <option value="3">2020</option>
                                        <option value="4">2022</option>
                                        <option value="5">2023</option>
                                    </select>
                                </div>
                                <div class="col-7">
                                    <select
                                        class="form-select form-control rounded-[6px] bg-slate-100 border-none focus:bg-slate-100 focus:outline-none"
                                        aria-label="Default select example">
                                        <option selected>7 - កក្កដា</option>
                                        <option value="1">29 - ឧសភា</option>
                                        <option value="2">12 - វិច្ឆិកា</option>
                                        <option value="3">2 - មីនា</option>
                                        <option value="4">20 - កញ្ញា</option>
                                        <option value="5">2 - តុលា</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row px-5 !mt-6">
                            <a data-bs-dismiss="modal" aria-label="Close" href="#"
                                class="btn btn-dark border-0 bg-primary-500 pay w-100 ms-0 text-primary-50 font-medium">បង់ឥឡូវនេះ</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .form-control {
        box-shadow: none;
    }

    .form-control:focus {
        border-color: #374151;
        outline: none;
    }



</style>