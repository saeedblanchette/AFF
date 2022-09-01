import React from "react";
import { motion } from "framer-motion";
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",

  },
};
const SustainableSvg = ({ className }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      // style="enable-background:new 0 0 512 512;"
      xmlSpace="preserve"
      className={className}
    >
      <g>
        <g>
          <g>
            <motion.path
              className={className}
              d="M256,83.592c-95.066,0-172.408,77.342-172.408,172.408S160.934,428.408,256,428.408S428.408,351.066,428.408,256
                        S351.066,83.592,256,83.592z M270.989,406.769c4.087-20.44,9.87-65.332-0.682-125.887c17.17-0.485,48.134-4.47,68.853-25.188
                        c29.351-29.35,25.126-79.282,24.931-81.393c-0.461-5.013-4.434-8.986-9.448-9.448c-2.112-0.194-52.043-4.42-81.393,24.93
                        c-8.727,8.726-14.484,19.272-18.264,29.839c-1.72-5.276-3.539-10.539-5.456-15.779c-1.983-5.42-7.986-8.205-13.403-6.222
                        c-5.42,1.983-8.206,7.984-6.222,13.403c7.238,19.781,13.02,39.882,17.188,59.745c0.626,2.982,1.205,5.926,1.747,8.838
                        c-7.8-8.747-17.59-16.733-29.612-21.59c-38.487-15.55-82.797,7.85-84.664,8.854c-4.436,2.383-6.539,7.592-5.005,12.387
                        c0.646,2.02,16.266,49.633,54.752,65.182c9.548,3.858,19.452,5.318,28.98,5.318c16.339,0,31.561-4.296,41.958-8.162
                        c0.595,32.659-3.552,55.799-5.791,65.763C168.939,403.921,104.49,337.351,104.49,256c0-83.543,67.967-151.51,151.51-151.51
                        S407.51,172.457,407.51,256C407.51,334.485,347.523,399.218,270.989,406.769z M308.114,220.828c-4.08-4.08-10.697-4.08-14.778,0
                        l-23.003,23.003c2.041-13.034,6.824-28.402,17.693-39.27c15.914-15.914,41.738-18.765,55.455-19.075
                        c-0.283,13.698-3.108,39.439-19.1,55.431c-10.802,10.802-26.167,15.583-39.216,17.638l22.948-22.948
                        C312.195,231.525,312.195,224.909,308.114,220.828z M205.038,313.819l30.091,12.157c-12.817,3.207-28.828,4.811-42.99-0.912
                        c-20.866-8.43-33.582-31.088-39.228-43.594c12.719-5.093,37.516-12.55,58.487-4.077c14.164,5.723,24.569,17.998,31.559,29.207
                        l-30.091-12.157c-5.35-2.161-11.441,0.423-13.602,5.774C197.102,305.568,199.687,311.659,205.038,313.819z"
              variants={icon}
              initial="hidden"
              viewport={{ once: true, amount: 0.8 }}
              whileInView="visible"
          
            />
            <motion.path
              className={className}
              d="M501.551,214.204h-30.107c-1.948-10.086-4.608-20.037-7.95-29.739l26.058-15.044c4.998-2.885,6.71-9.276,3.824-14.273
                        l-31.347-54.294c-2.885-4.999-9.276-6.71-14.273-3.824l-26.112,15.076c-6.731-7.74-14.007-15.016-21.747-21.747l15.076-26.112
                        c1.385-2.4,1.762-5.252,1.044-7.929c-0.718-2.677-2.468-4.959-4.868-6.345l-54.295-31.347c-2.4-1.385-5.252-1.76-7.929-1.044
                        c-2.677,0.718-4.959,2.468-6.345,4.868l-15.043,26.058c-9.703-3.343-19.654-6.003-29.739-7.95V10.449
                        C297.798,4.678,293.12,0,287.349,0h-62.694c-5.771,0-10.449,4.678-10.449,10.449v30.107c-10.086,1.948-20.037,4.608-29.739,7.95
                        l-15.043-26.058c-1.386-2.4-3.668-4.151-6.345-4.868c-2.677-0.716-5.53-0.342-7.929,1.044L100.856,49.97
                        c-2.4,1.386-4.151,3.668-4.868,6.345c-0.718,2.677-0.342,5.529,1.044,7.929l15.076,26.112
                        c-7.741,6.731-15.016,14.007-21.747,21.747L64.248,97.027c-4.997-2.884-11.387-1.172-14.273,3.824l-31.347,54.294
                        c-2.886,4.998-1.173,11.388,3.824,14.273l26.058,15.044c-3.342,9.702-6.002,19.652-7.95,29.739H10.449
                        C4.678,214.202,0,218.88,0,224.651v62.694c0,5.771,4.678,10.449,10.449,10.449h30.107c1.948,10.086,4.608,20.037,7.95,29.739
                        l-26.058,15.044c-4.998,2.885-6.71,9.276-3.824,14.273l31.347,54.294c2.885,4.998,9.276,6.709,14.273,3.824l26.112-15.076
                        c6.731,7.741,14.008,15.017,21.747,21.747l-15.076,26.112c-1.386,2.4-1.762,5.252-1.044,7.929s2.468,4.959,4.868,6.345
                        l54.295,31.347c2.401,1.387,5.253,1.762,7.929,1.044c2.676-0.718,4.959-2.468,6.345-4.868l15.043-26.058
                        c9.703,3.343,19.654,6.003,29.739,7.95v30.111c0,5.771,4.678,10.449,10.449,10.449h62.694c5.771,0,10.449-4.678,10.449-10.449
                        v-30.107c10.086-1.948,20.037-4.608,29.739-7.95l15.043,26.058c1.385,2.4,3.668,4.151,6.345,4.868
                        c2.677,0.718,5.529,0.343,7.929-1.044l54.295-31.347c2.4-1.385,4.151-3.668,4.868-6.345c0.718-2.677,0.342-5.53-1.044-7.929
                        l-15.076-26.112c7.741-6.731,15.016-14.007,21.747-21.747l26.112,15.076c4.997,2.884,11.388,1.173,14.273-3.824l31.347-54.294
                        c2.886-4.998,1.173-11.388-3.824-14.273l-26.058-15.044c3.342-9.702,6.002-19.652,7.95-29.739h30.111
                        c5.771,0,10.449-4.678,10.449-10.449v-62.694C512,218.882,507.322,214.204,501.551,214.204z M491.102,276.898h-28.463
                        c-5.17,0-9.563,3.781-10.333,8.894c-2.191,14.566-6.022,28.894-11.383,42.583c-1.885,4.811,0.03,10.277,4.505,12.86
                        l24.626,14.218l-20.898,36.196l-24.676-14.246c-4.469-2.582-10.157-1.511-13.383,2.521
                        c-9.194,11.491-19.682,21.978-31.172,31.172c-4.031,3.226-5.103,8.912-2.521,13.384l14.247,24.676l-36.197,20.898l-14.217-24.626
                        c-2.584-4.475-8.051-6.39-12.86-4.505c-13.69,5.362-28.017,9.192-42.583,11.383c-5.114,0.769-8.895,5.162-8.895,10.333v28.462
                        h-41.796v-28.463c0-5.17-3.781-9.564-8.895-10.333c-14.565-2.191-28.893-6.021-42.583-11.383
                        c-4.811-1.886-10.277,0.029-12.86,4.505l-14.217,24.626l-36.197-20.898l14.247-24.676c2.582-4.471,1.51-10.157-2.521-13.384
                        c-11.489-9.192-21.977-19.68-31.172-31.172c-3.227-4.032-8.912-5.103-13.383-2.521l-24.676,14.246l-20.898-36.196l24.626-14.218
                        c4.474-2.583,6.39-8.049,4.505-12.86c-5.361-13.69-9.192-28.017-11.383-42.583c-0.769-5.113-5.162-8.894-10.333-8.894H20.898
                        v-41.796h28.463c5.17,0,9.563-3.781,10.333-8.894c2.191-14.566,6.022-28.892,11.383-42.583c1.885-4.811-0.03-10.277-4.505-12.86
                        l-24.626-14.218l20.898-36.196l24.676,14.246c4.47,2.582,10.157,1.512,13.383-2.521c9.194-11.491,19.682-21.979,31.172-31.172
                        c4.031-3.226,5.102-8.912,2.521-13.383l-14.246-24.674l36.196-20.898l14.217,24.626c2.583,4.474,8.049,6.391,12.86,4.505
                        c13.69-5.362,28.017-9.192,42.583-11.383c5.114-0.769,8.895-5.162,8.895-10.333V20.898h41.796v28.464
                        c0,5.17,3.781,9.564,8.895,10.333c14.565,2.191,28.893,6.021,42.583,11.383c4.813,1.886,10.277-0.03,12.86-4.505l14.217-24.626
                        l36.196,20.898l-14.246,24.675c-2.582,4.471-1.51,10.157,2.521,13.383c11.493,9.195,21.981,19.683,31.172,31.172
                        c3.226,4.032,8.912,5.102,13.384,2.521l24.676-14.246l20.898,36.196l-24.626,14.218c-4.474,2.583-6.39,8.049-4.505,12.86
                        c5.361,13.69,9.192,28.017,11.383,42.583c0.769,5.113,5.162,8.894,10.333,8.894h28.462V276.898z"
                        variants={icon}
                        initial="hidden"
        
                        viewport={{ once: true, amount: 0.8 }}
                        whileInView="visible"
                    
            />
            <motion.path
              className={className}
              d="M230.386,158.648c-2.508-5.197-8.753-7.376-13.951-4.871c-5.197,2.508-7.378,8.754-4.871,13.951l0.92,1.916
                        c1.792,3.757,5.536,5.954,9.439,5.954c1.508,0,3.04-0.328,4.491-1.021c5.209-2.484,7.418-8.721,4.933-13.93L230.386,158.648z"
            
                        variants={icon}
                        initial="hidden"
        
                        viewport={{ once: true, amount: 0.8 }}
                        whileInView="visible"
                    
            />
          </g>
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export default SustainableSvg;