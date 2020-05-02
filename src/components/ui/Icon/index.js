import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faShieldAlt,
  faUserSecret,
  faFileContract,
  faSearchengin,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(fab, faShieldAlt, faUserSecret, faFileContract, faSearchengin, faMapMarkerAlt, faPhone, faPaperPlane);

const Icon = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
