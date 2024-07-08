const CrashButton: React.FC = () => {
    const handleClick = () => {
      throw new Error("Intentional Crash for Testing");
    };
  
    return (
      <button onClick={handleClick}>
        Crash the Website
      </button>
    );
  };

  export default CrashButton;