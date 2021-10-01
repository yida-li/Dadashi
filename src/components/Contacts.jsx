import React from 'react'

export default function Contacts() {
    return (
        <div id='contact'>

            <h1> Book your table</h1>
            <form>

                <input type='text'placeholder='Full Name'/>
                <input type='tel' placeholder='Phone Number '/>
                <textarea placeholder='Write Here ......'></textarea>
                <input type='submit'value='BOOK'/>
            </form>
            
        </div>
    )
}
