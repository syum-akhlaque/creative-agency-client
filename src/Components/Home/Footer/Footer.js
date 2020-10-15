import React from 'react';

const Footer = () => {
    return (
        <section style={{ background:'#FBD062'}} className="row d-flex my-5 py-5 ">
            <div className="col-md-5 offset-md-1 px-5">
                <h1 style={{color: '#111430', fontWeight: '500', fontSize: '35px'}}>Let us handle your project, professionally. </h1>
                <p className="text-secondary py-3">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                
            </div>
            <div className="col-md-5 px-5">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control"  placeholder="Your Email Address"/>
                    </div>
                    <div class="form-group">
                        <input  type="text" class="form-control" placeholder="Your name / company’s name"/>
                    </div>
                    <div class="form-group">     
                        <textarea class="form-control" rows="8" placeholder='Your message'></textarea>
                    </div>
                    <button className="btn text-white bg-darkBlue px-5">Send</button>
                </form>
            </div>
            <div className = 'mt-5 pt-3 mx-auto '>
               <p> copyright Orange labs { new Date().getFullYear()}</p>
            </div>
        </section>
    );
};

export default Footer;