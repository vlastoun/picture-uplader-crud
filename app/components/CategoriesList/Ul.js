import styled from 'styled-components';

const Ul = styled.ul`
    counter-reset: li; /* Initiate a counter */
    list-style: none; /* Remove default numbering */
    font: 15px 'trebuchet MS', 'lucida sans';
    padding: 0;
    margin-bottom: 4em;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
`;

export default Ul;
