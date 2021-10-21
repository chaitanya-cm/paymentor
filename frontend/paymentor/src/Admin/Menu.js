import React from 'react'

const Menu = () => {
    return (
        <>
            <div className="menu container-fluid pt-4 px-4">
                {/* <div className="nav d.flex justify-content-between align-items-center container-fluid p-3 ">
                    <h4>Paymentor</h4>
                    <button type="button" class="btn btn-outline-primary">Sign Out</button>
                </div> */}

                <div className="row vh-100">
                    <div className="part1 col-lg-2">
                        <h4>Paymentor</h4>
                        <div className="mt-5 mb-4"><a href="#">Dashboard</a></div>
                        <div className="mb-4"><a href="#">Add Student Data</a></div>
                        <div className="mb-4"><a href="#">Delete Student Data</a></div>
                        <div className="mb-4"><a href="#">Update Student Data</a></div>
                        <div><a href="#">Fee Details</a></div>
                    </div>

                    <div className="part2 col-lg-10">
                    <div className="nav d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-primary">Sign Out</button>
                </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
