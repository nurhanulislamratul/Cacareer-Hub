

const Catagori = ({catagori}) => {
    const {category_name, availability} = catagori;
    return (
        <div className="flex flex-col text-center space-y-3 border-2 rounded-3xl p-10 bg-gradient-to-r from-blue-50 to-purple-50">
            <h1 className="text-2xl">{category_name}</h1>
            <p>{availability}</p>
        </div>
    );
};

export default Catagori;