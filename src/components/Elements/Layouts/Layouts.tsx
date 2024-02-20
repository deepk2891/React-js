import React from "react"

interface Props {
	Child: any
}

const Layouts: React.FC<Props> = ({ Child }) => {
	return (
		<div>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab aliquam praesentium, expedita eum vitae modi, dignissimos est nam at ex sed asperiores iure quod minima iste ratione nisi
				placeat assumenda.
			</p>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque id iusto deserunt totam necessitatibus ratione possimus, ea obcaecati soluta sint vitae a numquam quasi
				iste saepe excepturi reprehenderit deleniti!
			</p>
		</div>
	)
}

export default Layouts
