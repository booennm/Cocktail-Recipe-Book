import React from 'react';

export default function Recipe(props) {
    return (
        <div>
            <div>
            <h1>{props.name}</h1>
            <div className='flex'>
                <img src={props.image} />
                <div className='ingredients'>
                <p>{props.i1}</p>
                <p>{props.i2}</p>
                <p>{props.i3}</p>
                <p>{props.i4}</p>
                <p>{props.i5}</p>
                <p>{props.i6}</p>
                <p>{props.i7}</p>
                <p>{props.i8}</p>
                <p>{props.i9}</p>
                <p>{props.i10}</p>
                <p>{props.i11}</p>
                <p>{props.i12}</p>
                <p>{props.i13}</p>
                <p>{props.i14}</p>
                <p>{props.i15}</p>
                </div>
            </div>
            <p className='instructions'>{props.instructions}</p>
            </div>
        </div>
    );
}