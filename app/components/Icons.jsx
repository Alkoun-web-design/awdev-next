export function RightChevron() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	    	<path fill="currentColor" d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z" />
	    </svg>
    )
}

export function LeftChevron() { 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		    <path fill="currentColor" d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z" />
	    </svg>
    )
}

export function Link() {
    return (
	    <svg className="inline h-5 w-5 mb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	    	<path fill="currentColor" d="m13 3l3.293 3.293l-7 7l1.414 1.414l7-7L21 11V3z" />
	    	<path fill="currentColor" d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2z" />
	    </svg>
    )
}

export function Close() { 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	    	<path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" />
	    </svg>
    )
}

export function PlayIcon() {
    return(
        <svg className="inline ml-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
        	<defs>
        		<mask id="SVGu4ff0bvt">
        			<g fill="none" strokeLinejoin="round" strokeWidth={4}>
        				<path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path>
        				<path fill="#000" stroke="#000" d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"></path>
        			</g>
        		</mask>
        	</defs>
        	<path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGu4ff0bvt)"></path>
        </svg>
    )
}

export function PauseIcon() { 
    return(
        <svg className="inline ml-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
        	<defs>
        		<mask id="SVGmWZpVL0o">
        			<g fill="none" strokeLinejoin="round" strokeWidth={4}>
        				<path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path>
        				<path stroke="#000" strokeLinecap="round" d="M19 18v12m10-12v12"></path>
        			</g>
        		</mask>
        	</defs>
        	<path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGmWZpVL0o)"></path>
        </svg>
    )
}

export function LinkIcon2(){
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48">
			<defs>
				<mask id="SVGoWjt7dcv">
					<g fill="none" strokeWidth={4}>
						<path stroke="#fff" d="M12 9.927V7a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3h-2.983"></path>
						<rect width={34} height={34} x={4} y={10} fill="#fff" stroke="#fff" strokeLinejoin="round" rx={3}></rect>
						<path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m18.44 23.11l5.292-5.51c1.451-1.451 3.837-1.42 5.328.072s1.523 3.877.072 5.328l-1.91 2.023m-13.756 3.724c-.51.51-1.565 1.53-1.565 1.53c-1.452 1.451-1.492 4.038 0 5.53c1.49 1.49 3.876 1.523 5.328.071l5.164-4.688"></path>
						<path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M18.663 28.328a3.86 3.86 0 0 1-1.131-2.473A3.67 3.67 0 0 1 18.592 23m3.729 2.861c1.491 1.491 1.523 3.877.072 5.329"></path>
					</g>
				</mask>
			</defs>
			<path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGoWjt7dcv)"></path>
		</svg>
	)
}

export function LinkedIcon(){
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><circle cx={4.983} cy={5.009} r={2.188} fill="currentColor"></circle><path fill="currentColor" d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path></svg>
	)
}

export function GithubIcon(){
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 1024 1024">
			<path fill="currentColor" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3"></path>
		</svg>
	)
}

export function FacebookIcon() {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 14 14">
			<path fill="currentColor" d="M0 12.923V1.077A1.077 1.077 0 0 1 1.077 0h11.846A1.077 1.077 0 0 1 14 1.077v11.846A1.077 1.077 0 0 1 12.923 14h-3.23V8.895h.764a.657.657 0 0 0 .657-.657V7.41a.655.655 0 0 0-.657-.657h-.722V5.74c0-.905.41-.905.819-.905h.527a.6.6 0 0 0 .464-.193a.63.63 0 0 0 .193-.464v-.796a.67.67 0 0 0-.646-.69H9.854a2.498 2.498 0 0 0-2.574 2.8v1.26h-.69a.657.657 0 0 0-.667.657v.83a.657.657 0 0 0 .668.656h.689V14H1.077A1.077 1.077 0 0 1 0 12.923"></path>
		</svg>
	)
}

export function Earth(){
	return (
		<svg className="inline-block ml-2" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 100 100">
			<rect width="100" height="100" fill="none" />
			<path fill="currentColor" d="M28.318 65.346c.634.008 1.009-.696 1.191-1.304c.673-2.247.725-4.676.15-6.95l-.931.053c.329 1.393-.68 2.957-2.085 3.232a7.06 7.06 0 0 0 .559 3.971c.22.479.588.992 1.116.998m46.393-5.805c-.843-.203-.803-1.43-1.32-2.126c-.799-1.076-2.489-.515-3.658.139c-1.8 1.006-3.672 1.939-5.422 3.031c-2.06 1.285-2.264 3.833-2.587 5.993c-.161 1.078-.736 1.973.248 2.656c1.861 1.292 4.482-1.764 6.358-2.042c2.497-.37 2.644 3.151 4.172 4.47a3.1 3.1 0 0 0 2.497.698a3.1 3.1 0 0 0 2.13-1.478c.356-1.398.964-2.277 1.788-3.466c.596-.86 1.221-1.834 1.063-2.868c-.139-.909-.845-1.605-1.385-2.35a7.4 7.4 0 0 1-1.103-6.289c-.85-.005-1.182 1.081-1.31 1.922c-.129.84-.644 1.909-1.471 1.71M52.529 46.896l-.136.436c.8.35 1.249 1.185 1.687 1.94c.436.751.918 1.478 1.496 2.126a9.4 9.4 0 0 0 2.288 1.86c1.513.878 3.229 1.329 4.922 1.77c1.168.304 2.348.61 3.554.655s2.459-.193 3.443-.892c-2.523-.132-5.097-.043-7.522-.754a11.8 11.8 0 0 1-5.628-3.649c-.597-.701-1.112-1.473-1.753-2.136s-1.439-1.224-2.351-1.356" />
			<path fill="currentColor" d="M63.168 52.315c.214.013.438.01.628-.088c.452-.233.499-.844.555-1.349a5.8 5.8 0 0 1 .8-2.355c.209-.344.456-.671.588-1.051s.125-.841-.142-1.142c-.306-.346-.855-.369-1.284-.197s-.775.496-1.138.78c-.574.449-1.216.813-1.75 1.31c-.534.496-.964 1.171-.942 1.9c.019.634.39 1.227.902 1.603c.511.375 1.149.55 1.783.589m8.706-1.866c-.153.677.431 1.303 1.043 1.631s1.323.527 1.786 1.044c.365.408.521.956.789 1.433c.267.477.744.924 1.287.854c.492-.063.874-.534 1.369-.542c.547-.009.918.524 1.258.954s.945.83 1.391.512c.357-.254.319-.832.04-1.169s-.715-.494-1.129-.636a.98.98 0 0 1 .291-.931l-3.688-2.183c-.502-.297-1.098-.603-1.639-.387c-.402.161-.726.596-1.154.53c-.356-.055-.552-.428-.752-.728s-.592-.581-.892-.382m.547-23.625c-.258-.625-.745-1.268-.512-1.902c.048-.131.127-.258.116-.397c-.02-.24-.281-.367-.49-.486c-.862-.49-1.27-1.485-1.761-2.346s-1.302-1.73-2.288-1.623l1.198 1.56c.856 1.115 1.729 2.262 2.134 3.607s.249 2.953-.753 3.939c-.301.296-.663.524-.979.804s-.596.637-.65 1.056s.187.896.6.986c.27.059.547-.049.796-.17c.935-.454 1.786-1.131 2.308-2.031s.678-2.036.281-2.997m-.12 46.934c-.089.125-.106.286-.12.439l-.153 1.669c.24.123.507-.1.676-.31a8.8 8.8 0 0 0 1.201-1.977c-.263.101-.555.017-.832-.026c-.276-.044-.609-.024-.772.205" />
			<path fill="currentColor" d="M50 2.608C23.858 2.608 2.666 23.8 2.666 49.942S23.858 97.276 50 97.276s47.334-21.192 47.334-47.334S76.142 2.608 50 2.608m15.63 6.928c-.941.407-1.873.891-2.792 1.287c-3.404 1.466-7.182 1.746-10.879 2.007l-5.792.409c-.032.602-.551 1.14-1.151 1.194s-1.207-.381-1.347-.967c-1.848 1.351-4.33 1.79-6.53 1.157c.003-.823 1.163-1.358 1.791-.825c.341-1.123-.595-2.312-1.71-2.68s-2.328-.142-3.479.087c-1.331.265-2.692.541-3.86 1.232c-1.168.692-2.127 1.891-2.156 3.248l7.339-3.174l-3.885 3.443c-.785.695-1.683 1.434-2.731 1.389s-1.967-1.416-1.233-2.165c-1.395.988-3.148 1.156-4.862 1.425C29.86 10.364 39.499 6.608 50 6.608c5.51 0 10.778 1.044 15.63 2.928M17.702 21.091c1.121-.076 2.28.381 3.005 1.245c.875 1.042 1.07 2.606.478 3.832l2.315-.234l.269 1.233l2.238.144c-.1 1.549-1.172 2.992-2.626 3.537s-3.21.159-4.303-.943c-.776.435-1.659-.545-1.706-1.434s.322-1.783.143-2.655c-.209-1.014-1.141-1.663-2.176-1.853a44 44 0 0 1 2.363-2.872m40.914 71.322c.16-.417.213-.864.101-1.303a5.27 5.27 0 0 0 4.166-1.238c.624-1.521-.253-3.325-1.584-4.289s-3.008-1.287-4.624-1.585c-3.553-.655-7.154-.256-10.708.161c-2.934.344-6.249.978-8.321 3.285c-.861.958-1.421 2.237-1.577 3.521C18.99 85.149 6.666 68.963 6.666 49.942c0-2.063.155-4.09.435-6.078c.526.704 1.318 1.214 2.185 1.19l2.673 11.179c1.108 4.633 2.275 9.398 5.071 13.255c.589.813 1.309 1.618 2.28 1.874c1.579.416 3.198-.841 3.819-2.352s.519-3.204.515-4.838a37.77 37.77 0 0 1 6.133-20.664c-1.603.567-3.705 1.003-4.738-.347c-.463-.605-.548-1.409-.616-2.167l-.708-7.876a28.2 28.2 0 0 1 2.333 9.625a14.3 14.3 0 0 0 6.962-3.04c.578-.469 1.159-1.069 1.176-1.813c.048-2.058-3.719-2.148-4.151-4.161c.074.347 6.268 2.245 7.031 2.691c2.106 1.231 2.736 3.841 3.782 5.975c.379.773.474 1.685.957 2.401c.349.516.953.909 1.57.825c1.362-.186 2.271-3.533 2.861-4.659c1.15-2.197 2.456-3.595 4.191-1.358c1.472 1.899 3.479 4.082 4.474 6.275c.788 1.736 1.032 4.038 3.639 3.936c.28-.011-1.575-2.805-1.726-2.994c-.895-1.119-1.404-2.231-2.003-3.589c.757.967 1.84 1.753 3.065 1.848c1.224.094 2.549-.672 2.808-1.872s-.915-2.557-2.103-2.246c-.306-.683.278-1.475.97-1.76s1.47-.249 2.201-.407c2.641-.572 4.097-4.121 2.618-6.383c-.76-1.162-2.137-2.564-1.245-3.628c.524-.625 1.586-.515 2.187.036s.836 1.392.958 2.199l.756-.178c.696-3.367 1.311-7.054-.291-10.097c-.452-.859-1.079-1.879-.576-2.709c.287-.473.853-.685 1.274-1.044s.659-1.101.207-1.42l1.429.064c-.107 2.354 1.674 4.653 3.98 5.14a48.5 48.5 0 0 1-2.485-8.962C84.11 19.148 93.332 33.49 93.332 49.946c.002 20.941-14.935 38.46-34.716 42.467" />
			<path fill="currentColor" d="m84.409 73.861l-7.674 6.332c3.503-.341 6.675-2.958 7.674-6.332" />
		</svg>
	)
}

export function Dot(){
	return (
		<svg className='inline-block mx-1 ' xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 48 48">
			<path fill="currentColor" stroke="currentColor" strokeWidth={4} d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"></path>
		</svg>
	)
}

export function GreenDot(){
	return (
		<svg className='inline-block mx-1 text-green-400 drop-shadow-md drop-shadow-green-400' xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 48 48">
			<path fill="currentColor" stroke="currentColor" strokeWidth={4} d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"></path>
		</svg>
	)
}

export function OrangeDot(){
	return (
		<svg className='inline-block mx-1 text-orange-500 drop-shadow-md drop-shadow-orange-500' xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 48 48">
			<path fill="currentColor" stroke="currentColor" strokeWidth={4} d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"></path>
		</svg>
	)
}


export function LoadingBlip() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 24 24">
			<circle cx={12} cy={12} r={0} fill="currentColor">
				<animate id="SVGPW9ARccz" fill="freeze" attributeName="r" begin="0;SVGaeu34cWL.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></animate>
				<animate fill="freeze" attributeName="opacity" begin="0;SVGaeu34cWL.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate>
			</circle>
			<circle cx={12} cy={12} r={0} fill="currentColor">
				<animate id="SVGODvPjeTJ" fill="freeze" attributeName="r" begin="SVGPW9ARccz.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></animate>
				<animate fill="freeze" attributeName="opacity" begin="SVGPW9ARccz.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate>
			</circle>
			<circle cx={12} cy={12} r={0} fill="currentColor">
				<animate id="SVGaeu34cWL" fill="freeze" attributeName="r" begin="SVGPW9ARccz.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></animate>
				<animate fill="freeze" attributeName="opacity" begin="SVGPW9ARccz.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate>
			</circle>
		</svg>
	)
}

export function Spinner() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="inline-block">
			<path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity={0.25}></path>
			<circle cx={12} cy={2.5} r={1.5} fill="currentColor">
				<animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform>
			</circle>
		</svg>
	)
}

// what build?
// what learn?
// what benefit?
// what challenges?
// how did you deal?

// build, 
// benefits, 
// challenges, 
// deal,
// learn
