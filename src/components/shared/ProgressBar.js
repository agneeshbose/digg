import React from 'react';

export default function ProgressBar({ page }) {
    return (
        <span
            style={{ marginLeft: '20px', fontSize: '1.5rem', width: '450px' }}
        >
            <div>Progress</div>
            <progress id="progress" value={page * (100 / 8)} max="100" />
        </span>
    );
}
