import React from 'react';
import ReactDOM from 'react-dom';
import BookingPortal from '../modules/booking-portal-module/client/src/bookingPortal';
import ListingInfo from '../modules/listinginfo-module/client/src/components/app';
import PhotoDisplay from '../modules/photodisplay-module/client/src/Components/App';
import Review from '../modules/Review-module/client/src/component/App'
import '../modules/listinginfo-module/client/src/styles/app.css';

ReactDOM.render(<PhotoDisplay />, document.getElementById('photoDisplay'));
ReactDOM.render(<BookingPortal />, document.getElementById('bookingPortal'));
ReactDOM.render(<ListingInfo />, document.getElementById('listingInfo'));
ReactDOM.render(<Review />, document.getElementById('review'));
