import React from 'react';

export function Fragment({ name, id, url }){
    return (
        <iframe name={name} id={id} src={url} />
    )
}